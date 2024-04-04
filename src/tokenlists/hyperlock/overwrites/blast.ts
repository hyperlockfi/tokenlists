import { Network } from '../../../types'
import { getPointsToken } from './utils/getPointsToken'
import { getYieldToken } from './utils/getYieldToken'

export const blastOverrides = {
  [Network.Blast]: {
    // prettier-ignore
    ...{ // points
      '0x0000000000000000000000000000000000000001': getPointsToken('JUICE', '0x0000000000000000000000000000000000000001'),
      '0x0000000000000000000000000000000000000002': getPointsToken('METASTREET', '0x0000000000000000000000000000000000000002'),
      '0x0000000000000000000000000000000000000003': getPointsToken('THRUST', '0x0000000000000000000000000000000000000003'),
      '0x0000000000000000000000000000000000000004': getPointsToken('BLAST', '0x0000000000000000000000000000000000000004'),
      '0x0000000000000000000000000000000000000005': getPointsToken('HYPER', '0x0000000000000000000000000000000000000005'),
      '0x0000000000000000000000000000000000000006': getPointsToken('RENZO', '0x0000000000000000000000000000000000000006'),
      '0x0000000000000000000000000000000000000007': getPointsToken('EIGEN', '0x0000000000000000000000000000000000000007'),
      '0x0000000000000000000000000000000000000008': getPointsToken('GOLD', '0x0000000000000000000000000000000000000008'),
    },
    // prettier-ignore
    ...{ // yield
      '0x4300000000000000000000000000000000000003': getYieldToken('USDB', '0x4300000000000000000000000000000000000003'),
      '0x1cde6a099a1cb14f3093d2b7cb5b7cbb2145cb64': getYieldToken('USDB-PT', '0x1cde6a099a1cb14f3093d2b7cb5b7cbb2145cb64'),
      '0xc878aeb90e6c35d81a8ceaa8dbb89b35aee81c87': getYieldToken('USDB-YT', '0xc878aeb90e6c35d81a8ceaa8dbb89b35aee81c87'),
      '0x13293dacab830d8fa2e0e961fb997b3f37186f46': getYieldToken('USDB-SY', '0x13293dacab830d8fa2e0e961fb997b3f37186f46'),
      '0xfa21affa1c65d91aa369628af3a88794485a1450': getYieldToken('USDB-LPT', '0xfa21affa1c65d91aa369628af3a88794485a1450'),
      '0x390b781baf1e6db546cf4e3354b81446947838d2': getYieldToken('HyperUSDB', '0x390b781baf1e6db546cf4e3354b81446947838d2'),
      '0x4300000000000000000000000000000000000004': getYieldToken('WETH', '0x4300000000000000000000000000000000000004'),
      '0xd4154f0175f5423de93dd1e1499f3a6801465375': getYieldToken('WETH-PT', '0xd4154f0175f5423de93dd1e1499f3a6801465375'),
      '0x22c1c2f9695d0cf8054472ef70510ec7c9640d04': getYieldToken('WETH-YT', '0x22c1c2f9695d0cf8054472ef70510ec7c9640d04'),
      '0xb80ad10dffdd415c2159962c1b35ef6edcf1b505': getYieldToken('WETH-SY', '0xb80ad10dffdd415c2159962c1b35ef6edcf1b505'),
      '0xecc3b335c95b28a9477c42c847be6d8cac80cf25': getYieldToken('WETH-LPT', '0xecc3b335c95b28a9477c42c847be6d8cac80cf25'),
      '0x1856c7e0b559e9d7287473cb4b4786398db4032a': getYieldToken('HyperWETH', '0x1856c7e0b559e9d7287473cb4b4786398db4032a'),
    },
    // tokens
    '0x42e12d42b3d6c4a74a88a61063856756ea2db357': {
      name: 'Orbit Protocol',
      symbol: 'ORBIT',
    },
    '0x216a5a1135a9dab49fa9ad865e0f22fe22b5630a': {
      name: 'Pump',
      symbol: 'PUMP',
    },
    '0xe4796ccb6bb5de2290c417ac337f2b66ca2e770e': {
      name: 'sFrax',
      symbol: 'sFRAX',
    },
    '0x1f55a02a049033e3419a8e2975cf3f572f4e6e9a': {
      name: 'sfrxETH',
      symbol: 'sfrxETH',
    },
    '0x23432452b720c80553458496d4d9d7c5003280d0': {
      name: 'FXS',
      symbol: 'FXS',
    },
    '0xf7bc58b8d8f97adc129cfc4c9f45ce3c0e1d2692': {
      name: 'Wrapped BTC',
      symbol: 'wBTC',
    },
    '0x818a92bc81aad0053d72ba753fb5bc3d0c5c0923': {
      name: 'Juice',
      symbol: 'JUICE',
    },
    '0x9a50953716ba58e3d6719ea5c437452ac578705f': {
      name: 'MetaStreet V2 Deposit: WPUNKS-wstETH:20',
      symbol: 'mwstETH-WPUNKS:20',
    },
    '0x41cf7ea4ba650191e829a6bd31b9e2049c78d858': {
      name: 'MetaStreet V2 Deposit: PPG-WETH:5',
      symbol: 'mWETH-PPG:5',
    },
    '0xe7903b1f75c534dd8159b313d92cdcfbc62cb3cd': {
      name: 'rsETHWrapped',
      symbol: 'wrsETH',
    },
    '0x5ffd9ebd27f2fcab044c0f0a26a45cb62fa29c06': {
      name: 'PacMoon',
      symbol: 'PAC',
    },
    '0x67fa2887914fa3729e9eed7630294fe124f417a0': {
      name: 'Yield Token',
      symbol: 'YIELD',
    },
    '0xd43d8adac6a4c7d9aeece7c3151fca8f23752cf8': {
      name: 'Andy',
      symbol: 'ANDY',
    },
    '0x233b23de890a8c21f6198d03425a2b986ae05536': {
      name: 'Core Markets',
      symbol: 'CORE',
    },
    '0x38cdfc4111b49f24784670d35c5b4d2d38ecb33b': {
      name: 'Drip Token',
      symbol: 'DRIP',
    },
    '0xd07379a755a8f11b57610154861d694b2a0f615a': {
      name: 'SwapBlast Finance Token',
      symbol: 'SBF',
    },
    '0xeb466342c4d449bc9f53a865d5cb90586f405215': {
      name: 'Axelar Wrapped USDC',
      symbol: 'axlUSDC',
    },
    '0x9e0d7d79735e1c63333128149c7b616a0dc0bbdb': {
      name: 'Pirex Ether OFT',
      symbol: 'pxETH',
    },
    '0x999f220296b5843b2909cc5f8b4204aaca5341d8': {
      name: 'Metastreet Punks',
      symbol: 'mwsteth:WPUNKS:40',
    },
    '0x1509706a6c66ca549ff0cb464de88231ddbe213b': {
      name: 'Aura Finance',
      symbol: 'AURA',
    },
    '0xb9dfcd4cf589bb8090569cb52fac1b88dbe4981f': {
      name: 'BAG',
      symbol: 'BAG',
    },
    '0x2416092f143378750bb29b79ed961ab195cceea5': {
      name: 'Renzo Restaked ETH',
      symbol: 'ezETH',
    },
    '0xca84812e477ee5a96a92328689d8ce2589ab6ffd': {
      name: 'ALIEN',
      symbol: 'ALIEN',
    },
    '0x5fe8534a6f96cb01261bd96e98c17c2c1cab3204': {
      name: 'Baja',
      symbol: 'BAJA',
    },
    '0x20fe91f17ec9080e3cac2d688b4ecb48c5ac3a9c': {
      name: 'YES',
      symbol: 'YES',
    },
    '0x4fee793d435c6d2c10c135983bb9d6d4fc7b9bbd': {
      name: 'USD+',
      symbol: 'USD+',
    },
    '0x15d24de366f69b835be19f7cf9447e770315dd80': {
      name: 'KAP',
      symbol: 'KAP',
    },
    '0xd582879453337bd149ae53ec2092b0af5281d1d7': {
      name: 'GLORY',
      symbol: 'GLORY',
    },
  },
}
