import { Network } from '../../../types'
import { getYieldToken } from './utils/getYieldToken'

export const sepoliaOverrides = {
  [Network.Sepolia]: {
    // points
    '0x0000000000000000000000000000000000000001': {
      address: '0x0000000000000000000000000000000000000001',
      name: 'JUICE',
      symbol: 'JUICE',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'juice'}.png`,
    },
    '0x0000000000000000000000000000000000000002': {
      address: '0x0000000000000000000000000000000000000002',
      name: 'METASTREET',
      symbol: 'METASTREET',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'metastreet'}.png`,
    },
    '0x0000000000000000000000000000000000000003': {
      address: '0x0000000000000000000000000000000000000003',
      name: 'THRUST',
      symbol: 'THRUST',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'thruster'}.png`,
    },
    '0x0000000000000000000000000000000000000004': {
      address: '0x0000000000000000000000000000000000000004',
      name: 'BLAST',
      symbol: 'BLAST',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'blast'}.png`,
    },
    '0x0000000000000000000000000000000000000005': {
      address: '0x0000000000000000000000000000000000000005',
      name: 'HYPER',
      symbol: 'HYPER',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'hyper'}.png`,
    },
    '0x0000000000000000000000000000000000000006': {
      address: '0x0000000000000000000000000000000000000006',
      name: 'RENZO',
      symbol: 'RENZO',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'renzo'}.png`,
    },
    '0x0000000000000000000000000000000000000007': {
      address: '0x0000000000000000000000000000000000000007',
      name: 'EIGEN',
      symbol: 'EIGEN',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'eigen'}.png`,
    },
    '0x0000000000000000000000000000000000000020': {
      address: '0x0000000000000000000000000000000000000020',
      name: 'veTHRUST',
      symbol: 'veTHRUST',
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'vethrust'}.png`,
    },
    // prettier-ignore
    ...{ // yield
      '0x4200000000000000000000000000000000000022': getYieldToken('USDB', '0x4200000000000000000000000000000000000022'),
      '0x2100d2da8d51269607cdc503e58242471c5d54e7': getYieldToken('USDB-PT', '0x2100d2da8d51269607cdc503e58242471c5d54e7'),
      '0x0af63da91f2a50823863ab232253781cfd2b4695': getYieldToken('USDB-YT', '0x0af63da91f2a50823863ab232253781cfd2b4695'),
      '0x52a53f25b2b717a02613a9259d3ed6a189b9d22a': getYieldToken('USDB-SY', '0x52a53f25b2b717a02613a9259d3ed6a189b9d22a'),
      '0x4200000000000000000000000000000000000023': getYieldToken('WETH', '0x4200000000000000000000000000000000000023'),
      '0x0e402b19f5bb665e558f197db3ed1ffbb6369876': getYieldToken('WETH-PT', '0x0e402b19f5bb665e558f197db3ed1ffbb6369876'),
      '0x6c07e20e618ac8b3f5f25b30d358ba62a458fd4d': getYieldToken('WETH-YT', '0x6c07e20e618ac8b3f5f25b30d358ba62a458fd4d'),
      '0xa1dd7ee93b5990851fca04257232d7062fe9c315': getYieldToken('WETH-SY', '0xa1dd7ee93b5990851fca04257232d7062fe9c315'),
    },
  },
}
