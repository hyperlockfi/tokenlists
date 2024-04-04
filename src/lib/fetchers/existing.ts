import { TokenInfo, TokenList } from '@uniswap/token-lists'
import { Network, OverwritesForList, PartialTokenInfoMap } from '../../types'
import fs from 'fs'
import { getAddress, isAddress } from 'ethers'
import { merge, mergeWith, pick } from 'lodash'
import _ from 'lodash'

function convertTokenInfoToMap(tokenInfo: TokenInfo[]): PartialTokenInfoMap {
  return tokenInfo.reduce((map: PartialTokenInfoMap, obj) => {
    map[getAddress(obj.address)?.toLowerCase()] = pick(
      obj,
      'address',
      'symbol',
      'decimals',
      'logoURI',
      'chainId'
    )
    return map
  }, {})
}

type TokenIconInfo = Pick<TokenInfo, 'address' | 'logoURI'>

function fetchLocalTokenIcons(network: Network): PartialTokenInfoMap {
  const tokenIcons: TokenIconInfo[] = []

  const localImages: string[] = fs.readdirSync('src/assets/images/tokens')
  localImages.map((imageName) => {
    let address: string
    const fileName = imageName.split('.png')[0]

    if (!isAddress(fileName)) {
      const [_network, _address] = (fileName as string).split('_')
      if (_network === network && isAddress(_address)) {
        address = _address
      } else {
        return
      }
    } else {
      address = fileName
    }
    tokenIcons.push({
      address: getAddress(address),
      // eslint-disable-next-line max-len
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${fileName.toLowerCase()}.png`,
    })
  })

  return convertTokenInfoToMap(tokenIcons as TokenInfo[])
}

function fetchExistingTokensListMap(
  network: Network,
  existingTokenlist: TokenList | undefined
): PartialTokenInfoMap {
  if (!existingTokenlist) return {}

  const tokens = existingTokenlist.tokens.filter(
    (token) => token.chainId === Number(network)
  )

  return convertTokenInfoToMap(tokens)
}

/**
 * Data hierarchy:
 * 1. Overwrites
 * 2. Local asset images
 * 3. Existing tokenlist
 */
export async function fetchExistingMetadata(
  network: Network,
  overwrites: OverwritesForList,
  existingTokenList: TokenList | undefined
): Promise<PartialTokenInfoMap> {
  const overwritesMetadata = overwrites[network]
  const localTokenIcons = fetchLocalTokenIcons(network)
  const existingListMetadata = fetchExistingTokensListMap(
    network,
    existingTokenList
  )
  return merge(existingListMetadata, localTokenIcons, overwritesMetadata)
}
