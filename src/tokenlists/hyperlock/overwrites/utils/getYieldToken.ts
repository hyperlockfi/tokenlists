interface Token {
  address: string
  name: string
  symbol: string
  logoURI: string
}

type Key =
  | 'USDB'
  | 'USDB-PT'
  | 'USDB-YT'
  | 'USDB-SY'
  | 'USDB-LPT'
  | 'HyperUSDB'
  | 'WETH'
  | 'WETH-PT'
  | 'WETH-YT'
  | 'WETH-SY'
  | 'WETH-LPT'
  | 'HyperWETH'

const data: Record<Key, Omit<Token, 'address'>> = {
  USDB: {
    name: 'USDB',
    symbol: 'USDB',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`,
  },
  'USDB-PT': {
    name: 'USDB-PT',
    symbol: 'USDB-PT',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-pt'}.png`,
  },
  'USDB-YT': {
    name: 'USDB-YT',
    symbol: 'USDB-YT',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-yt'}.png`,
  },
  'USDB-SY': {
    name: 'USDB-SY',
    symbol: 'USDB-SY',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-sy'}.png`,
  },
  'USDB-LPT': {
    name: 'USDB-LPT',
    symbol: 'USDB-LPT',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-lp'}.png`,
  },
  HyperUSDB: {
    name: 'HyperUSDB',
    symbol: 'HyperUSDB',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-lp'}.png`,
  },
  WETH: {
    name: 'WETH',
    symbol: 'WETH',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`,
  },
  'WETH-PT': {
    name: 'WETH-PT',
    symbol: 'WETH-PT',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-pt'}.png`,
  },
  'WETH-YT': {
    name: 'WETH-YT',
    symbol: 'WETH-YT',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-yt'}.png`,
  },
  'WETH-SY': {
    name: 'WETH-SY',
    symbol: 'WETH-SY',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-sy'}.png`,
  },
  'WETH-LPT': {
    name: 'WETH-LPT',
    symbol: 'WETH-LPT',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-lp'}.png`,
  },
  HyperWETH: {
    name: 'HyperWETH',
    symbol: 'HyperWETH',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-lp'}.png`,
  },
}

export const getYieldToken = (key: Key, address: string) => {
  return { ...data[key], address }
}
