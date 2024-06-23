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
  | 'KELP'
  | 'ETHERFI'
  | 'ETHENA'
  | 'TURTLE'
  | 'SPLICE'
  | 'FXN'

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
  KELP: {
    name: 'KELP',
    symbol: 'KELP',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'kelp'}.png`,
  },
  ETHERFI: {
    name: 'ETHERFI',
    symbol: 'ETHERFI',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'etherfi'}.png`,
  },
  ETHENA: {
    name: 'ETHENA',
    symbol: 'ETHENA',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'ethena'}.png`,
  },
  TURTLE: {
    name: 'TURTLE',
    symbol: 'TURTLE',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'turtleclub'}.png`,
  },
  SPLICE: {
    name: 'SPLICE',
    symbol: 'SPLICE',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'splice'}.png`,
  },
  FXN: {
    name: 'FXN',
    symbol: 'FXN',
    logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'fxn'}.png`,
  }
}


export const getPointsToken = (key: Key, address: string) => {
  return { ...data[key], address }
}
