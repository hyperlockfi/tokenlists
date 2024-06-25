import { TokenInfo } from '@uniswap/token-lists'
import 'dotenv/config'
import fs from 'fs'
import { Network, ThrusterTokenInfo } from './types'
import https from 'https'
const { exec } = require('child_process');

async function run() {
    const remoteData = await compareToLocal()
    const remoteTokens = await generateTokens(Network.Blast, remoteData)
    await getIcons(remoteTokens)
    convertToPng(remoteTokens.length > 0)
    updateTokenList('./src/tokenlists/hyperlock/tokens/blast.ts', remoteTokens)
    updateTokenInfo('./src/tokenlists/hyperlock/overwrites/blast.ts', remoteTokens)
}

;(async () => {
    try{
        await run()
    } catch(error) {
        console.error(error)
        process.exit(1)
    }
})()


async function fetchRemoteData() {
    const res = await fetch('https://raw.githubusercontent.com/ThrusterX/thruster-token-list/main/chains/81457/token-list.json')
    const data = await res.json()
    return data
}

async function compareToLocal() {
    const localData = await JSON.parse(fs.readFileSync('./generated/hyperlock.tokenlist.json', 'utf8'))
    const remoteData: ThrusterTokenInfo[] = await fetchRemoteData()
    const localAddresses: string[] = localData.tokens.map((token: Partial<TokenInfo>) => token.address?.toLowerCase())

    const missingAddresses = remoteData.filter(({tokenAddress}) => !localAddresses.includes(tokenAddress.toLowerCase()))
    return missingAddresses
}

async function generateTokens(
    network: Network,
    remoteTokens: ThrusterTokenInfo[],
) {
    const tokens: TokenInfo[] = []

    for (const token of remoteTokens) {
        const newToken={
            chainId: network,
            address: token.tokenAddress,
            name: token.tokenName,
            symbol: token.tokenSymbol,
            logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${token.tokenAddress.toLowerCase()}.png`,
            decimals: token.tokenDecimals
        } as unknown as TokenInfo
        tokens.push(newToken)
    }

    return tokens
}

async function getIcons(newTokens: TokenInfo[]) {
    const imageUrls = newTokens.map(({address}) => ({address: address, url: `https://raw.githubusercontent.com/ThrusterX/thruster-token-list/main/chains/81457/assets/${address}/token-logo.svg`}))
    
    const downloadPromises = imageUrls.map(({ address, url }) => {
        return new Promise((resolve, reject) => {
            const filePath = `./src/assets/images/tokens/${address}.svg`;
            const file = fs.createWriteStream(filePath);

            https.get(url, response => {
                response.pipe(file);

                file.on('finish', () => {
                    file.close(() => resolve(`Downloaded and saved: ${address}`));
                });

                file.on('error', (err) => {
                    fs.unlink(filePath, () => {}); // Attempt to delete file on error
                    reject(`Error saving file ${address}: ${err}`);
                });
            }).on('error', (err) => {
                fs.unlink(filePath, () => {}); // Attempt to delete file on error
                reject(`Error downloading ${address}: ${err}`);
            });
        });
    });

    try {
        const results = await Promise.all(downloadPromises);
        console.log(results);
    } catch (e) {
        console.error('Error fetching images:', e);
    }
}

const convertToPng = (newTokens: boolean) => {

    if (!newTokens) return
    // Directory containing the SVG files
    const directory = 'src/assets/images/tokens'
    
    // Command to find SVG files, convert them, rename, and delete the original
    const command = `
    cd ${directory} &&
    for file in *.svg; do
      rsvg-convert -h 128 "$file" -o "\${file%.svg}.png"
      rm "$file"
    done
    `

    const resize = `
    cd ${directory} && sips -Z 128 *.png
    `
    
    exec(command, (error: any, stdout: any, stderr:any) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    exec(resize)
}

const updateTokenList = (path: string, tokens: TokenInfo[]) => {
    const tokenList = fs.readFileSync(path, 'utf8').toString().split("\n")
    tokenList.splice(tokenList.length-2, 0, ...tokens.map(({address, name}) => `\t'${address}', //${name}`))
    fs.writeFileSync(path, tokenList.join("\n"))
    //console.log(tokenList)
}

function generateTokenInfo (address: string, name: string, symbol: string) {
    return [
        `\t'${address}': {`,
        `\t\tname: '${name}',`,
        `\t\tsymbol: '${symbol}',`,
        `\t},`
    ]
}

const updateTokenInfo = (path: string, tokens: TokenInfo[]) => {
    const tokenInfo = fs.readFileSync(path, 'utf8').toString().split("\n")
    for (const token of tokens ){
        const newTokenInfo = (generateTokenInfo(token.address, token.name, token.symbol))
        tokenInfo.splice(tokenInfo.length-3, 0, ...newTokenInfo)
        fs.writeFileSync(path, tokenInfo.join("\n"))
    }
}
