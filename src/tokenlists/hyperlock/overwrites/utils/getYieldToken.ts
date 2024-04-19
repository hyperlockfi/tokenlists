interface Token {
  address: string
  name: string
  symbol: string
  logoURI: string
}

type Key =
  // usdb
  | 'USDB'
  | 'USDB-PT'
  | 'USDB-YT'
  | 'USDB-SY'
  | 'USDB-LPT'
  | 'HyperUSDB'
  // weth
  | 'WETH'
  | 'WETH-PT'
  | 'WETH-YT'
  | 'WETH-SY'
  | 'WETH-LPT'
  | 'HyperWETH'
  // ezeth:weth
  | 'EZETH:WETH'
  | 'EZETH:WETH-PT'
  | 'EZETH:WETH-YT'
  | 'EZETH:WETH-SY'

const data: Record<Key, Pick<Token, 'logoURI'>> = {
  USDB: {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`,
  },
  'USDB-PT': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`,
  },
  'USDB-YT': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`,
  },
  'USDB-SY': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`,
  },
  'USDB-LPT': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`,
  },
  HyperUSDB: {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`,
  },
  WETH: {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`,
  },
  'WETH-PT': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`,
  },
  'WETH-YT': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`,
  },
  'WETH-SY': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`,
  },
  'WETH-LPT': {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`,
  },
  HyperWETH: {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`,
  },
  "EZETH:WETH": {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'ezeth:weth'}.png`,
  },
  "EZETH:WETH-PT": {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'ezeth:weth'}.png`,
  },
  "EZETH:WETH-YT": {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'ezeth:weth'}.png`,
  },
  "EZETH:WETH-SY": {
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'ezeth:weth'}.png`,
  },
}

export const getYieldToken = (key: Key, address: string) => {
  return { logoURI: data[key].logoURI, address, symbol: key, name: key }
}
