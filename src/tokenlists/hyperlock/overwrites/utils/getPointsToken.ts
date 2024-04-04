interface Token {
  address: string
  name: string
  symbol: string
  logoURI: string
}

type Key =
  | 'JUICE'
  | 'METASTREET'
  | 'THRUST'
  | 'BLAST'
  | 'HYPER'
  | 'RENZO'
  | 'EIGEN'
  | 'GOLD'

const data: Record<Key, Omit<Token, 'address'>> = {
  JUICE: {
    name: 'JUICE',
    symbol: 'JUICE',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'juice'}.png`,
  },
  METASTREET: {
    name: 'METASTREET',
    symbol: 'METASTREET',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'metastreet'}.png`,
  },
  THRUST: {
    name: 'THRUST',
    symbol: 'THRUST',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'thruster'}.png`,
  },
  BLAST: {
    name: 'BLAST',
    symbol: 'BLAST',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'blast'}.png`,
  },
  HYPER: {
    name: 'HYPER',
    symbol: 'HYPER',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'hyper'}.png`,
  },
  RENZO: {
    name: 'RENZO',
    symbol: 'RENZO',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'renzo'}.png`,
  },
  EIGEN: {
    name: 'EIGEN',
    symbol: 'EIGEN',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'eigen'}.png`,
  },
  GOLD: {
    name: 'GOLD',
    symbol: 'GOLD',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'gold'}.png`,
  },
}

export const getPointsToken = (key: Key, address: string) => {
  return { ...data[key], address }
}
