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
      '0x0000000000000000000000000000000000000009': getPointsToken('KELP', '0x0000000000000000000000000000000000000009'),
      '0x0000000000000000000000000000000000000010': getPointsToken('ETHERFI', '0x0000000000000000000000000000000000000010'),
      '0x0000000000000000000000000000000000000011': getPointsToken('ETHENA', '0x0000000000000000000000000000000000000011'),
      '0x0000000000000000000000000000000000000012': getPointsToken('TURTLE', '0x0000000000000000000000000000000000000012'),
      '0x0000000000000000000000000000000000000013': getPointsToken('SPLICE', '0x0000000000000000000000000000000000000013'),
      '0x0000000000000000000000000000000000000014': getPointsToken('FXN', '0x0000000000000000000000000000000000000014'),
      '0x0000000000000000000000000000000000000015': getPointsToken('AFFINE', '0x0000000000000000000000000000000000000015'),
      '0x0000000000000000000000000000000000000016': getPointsToken('SYMBIOTIC', '0x0000000000000000000000000000000000000016'),
    },
    // prettier-ignore
    ...{ // yield
      '0x4300000000000000000000000000000000000003': getYieldToken('USDB', '0x4300000000000000000000000000000000000003'),
      '0x1cde6a099a1cb14f3093d2b7cb5b7cbb2145cb64': getYieldToken('USDB-PT', '0x1cde6a099a1cb14f3093d2b7cb5b7cbb2145cb64'),
      '0xc878aeb90e6c35d81a8ceaa8dbb89b35aee81c87': getYieldToken('USDB-YT', '0xc878aeb90e6c35d81a8ceaa8dbb89b35aee81c87'),
      '0x13293dacab830d8fa2e0e961fb997b3f37186f46': getYieldToken('USDB-SY', '0x13293dacab830d8fa2e0e961fb997b3f37186f46'),
      '0x258133c3ecd19591544c01884227e4ae03f0dbd0': getYieldToken('USDB-LPT', '0x258133c3ecd19591544c01884227e4ae03f0dbd0'),
      '0x6b61cfce05aaf44eba5da45def48c0fbd26390a1': getYieldToken('USDB-LPT', '0x6b61cfce05aaf44eba5da45def48c0fbd26390a1'),
      '0x390b781baf1e6db546cf4e3354b81446947838d2': getYieldToken('HyperUSDB', '0x390b781baf1e6db546cf4e3354b81446947838d2'),
      '0x4300000000000000000000000000000000000004': getYieldToken('WETH', '0x4300000000000000000000000000000000000004'),
      '0xd4154f0175f5423de93dd1e1499f3a6801465375': getYieldToken('WETH-PT', '0xd4154f0175f5423de93dd1e1499f3a6801465375'),
      '0x22c1c2f9695d0cf8054472ef70510ec7c9640d04': getYieldToken('WETH-YT', '0x22c1c2f9695d0cf8054472ef70510ec7c9640d04'),
      '0xb80ad10dffdd415c2159962c1b35ef6edcf1b505': getYieldToken('WETH-SY', '0xb80ad10dffdd415c2159962c1b35ef6edcf1b505'),
      '0xaa09cff22452a6d59836b1e2b3820815f52498b8': getYieldToken('WETH-LPT', '0xaa09cff22452a6d59836b1e2b3820815f52498b8'),
      '0xb9612af20a0143661a695fcb0d176aa2bda2a332': getYieldToken('WETH-LPT', '0xb9612af20a0143661a695fcb0d176aa2bda2a332'),
      '0x1856c7e0b559e9d7287473cb4b4786398db4032a': getYieldToken('HyperWETH', '0x1856c7e0b559e9d7287473cb4b4786398db4032a'),
      '0xc201db2c73a7583d6ec638f5a0337e4c12e8ee52': getYieldToken('EZETH:WETH', '0xc201db2c73a7583d6ec638f5a0337e4c12e8ee52'),
      '0x93040d9775770a478370aea9f6048fe350e65544': getYieldToken('EZETH:WETH-PT', '0x93040d9775770a478370aea9f6048fe350e65544'),
      '0xb7543dc092d11aef167b42e1cc4aeb30c49d2e19': getYieldToken('EZETH:WETH-YT', '0xb7543dc092d11aef167b42e1cc4aeb30c49d2e19'),
      '0x65f28f49932181bd3cab189770f0e3dc850c57b5': getYieldToken('EZETH:WETH-SY', '0x65f28f49932181bd3cab189770f0e3dc850c57b5'),
      '0x92523143fc87ef79fd8a4461574fb0c07611d1fc': getYieldToken('EZETH:WETH-LPT', '0x92523143fc87ef79fd8a4461574fb0c07611d1fc'),
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
    '0x049e6a52e2c9b7814c8178908f3630726c134c92': {
      name: 'Ankr Staked ETH',
      symbol: 'ankrETH',
    },
    '0x3580ac35bed2981d6bdd671a5982c2467d301241': {
      name: 'Ankr Network',
      symbol: 'ANKR',
    },
    '0x491e6de43b55c8eae702edc263e32339da42f58c': {
      name: 'eesee',
      symbol: 'ESE',
    },
    '0x04c0599ae5a44757c0af6f9ec3b93da8976c150a': {
      name: 'Wrapped eETH',
      symbol: 'weETH',
    },
    '0x75483179a38d21f3608e71bbede5ec1314f0067d': {
      name: 'NeptuneX',
      symbol: 'NPTX',
    },
    '0xc8d8d820f88df3bd48c4f8e95bca3b994b73c699': {
      name: 'mBLASTOPIANS',
      symbol: 'mBLASTOPIANS',
    },
    '0x08e0948e952063a6396a24fc59554ac476bea66e': {
      name: 'UpTo3',
      symbol: 'UPT',
    },
    '0x7135b32e9903bdb4e19a8b1d22fc2038964b8451': {
      name: 'EarlyFans',
      symbol: 'EARLY',
    },
    '0xb5a86030b64afaa75c42c0d28f8d5ce5f9f61401': {
      name: 'Wolf Game WOOL',
      symbol: 'WOLF',
    },
    '0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34': {
      name: 'USDe',
      symbol: 'USDe',
    },
    '0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2': {
      name: 'Staked USDe',
      symbol: 'sUSDe',
    },
    '0x5a7a183b6b44dc4ec2e3d2ef43f98c5152b1d76d': {
      name: 'InceptionLRT restaked ETH',
      symbol: 'inETH',
    },
    '0x129ed667bf8c065fe5f66c9b44b7cb0126d85cc3': {
      name: 'AIWAIFU',
      symbol: '$WAI',
    },
    '0x8e38179d361402f6a94767757e807146609e9b3d': {
      name: 'Dola USD Stablecoin',
      symbol: 'DOLA',
    },
    '0x472df997a253a8ae94121572d2017a7232705ab2': {
      name: 'BLAST BUS',
      symbol: 'BUS',
    },
    '0xb6e0d8a730c6e5c85c637b1cf7ad6fd07927b965': {
      name: 'Blastin Pepes',
      symbol: 'bPEPE',
    },
    '0xb3443dd8590ec811726df6909d9bca6d6d4e250e': {
      name: 'Wrapped Ethlas',
      symbol: 'WELS',
    },
    '0x1da40c742f32bbee81694051c0ee07485fc630f6': {
      name: 'Duo ETH',
      symbol: 'DETH',
    },
    '0x1a3d9b2fa5c6522c8c071dc07125ce55df90b253': {
      name: 'Duo USD',
      symbol: 'DUSD',
    },
    '0x406f10d635be12ad33d6b133c6da89180f5b999e': {
      name: 'Blast LooksRare',
      symbol: 'bLOOKS',
    },
    '0x357f93e17fdabecd3fefc488a2d27dff8065d00f': {
      name: 'ZeroLend',
      symbol: 'ZERO',
    },
    '0xf77dd21c5ce38ac08786be35ef1d1dec1a6a15f3': {
      name: 'Yolo',
      symbol: 'YOLO',
    },
    '0xe6a062fba3918376500a602c800b1e0307420457': {
      name: 'GREED',
      symbol: 'GREED',
    },
    '0xebe265c9299d0c879bcc2a76948511ba6ed6c36d': {
      name: 'CNOTE-OFT',
      symbol: 'CNOTE-OFT',
    },
    '0x4bed2a922654cacc2be974689619768fabf24855': {
      name: 'Wasabi USDB',
      symbol: 'wUSDB',
    },
    '0xc608dfb90a430df79a8a1edbc8be7f1a0eb4e763': {
      name: 'Alladin rUSD',
      symbol: 'ARUSD',
    },
    '0x000000daa580e54635a043d2773f2c698593836a': {
      name: 'Oh No',
      symbol: 'OHNO',
    },
    '0x0a4b0263589750e6383e199310be98e6e2dee258': {
      name: 'WORLD PEACE',
      symbol: 'PEACE',
    },
    '0x0b4d0ee29857c3961b380d4ec138ea5814e346b9': {
      name: 'P@cman Blastoff',
      symbol: '$PACM',
    },
    '0x0c2ffacd70c1d1cb04d4803dea055dd9d4b57601': {
      name: 'BlastName Service',
      symbol: 'BNS',
    },
    '0x1a49351bdb4be48c0009b661765d01ed58e8c2d8': {
      name: 'YESv2',
      symbol: 'YES',
    },
    '0x236bb48fcf61ce996b2c8c196a9258c176100c7d': {
      name: 'RabbitX',
      symbol: 'RBX',
    },
    '0x5d68d64e80f47eff763b087deaae46ff25205674': {
      name: 'SWIM',
      symbol: '$SWIM',
    },
    '0x6531ae67098bc73db9179dcbc6f161fcd9fd4c01': {
      name: 'MetaStreet V2 Deposit: PPG-WETH:10',
      symbol: 'mWETH-PPG:10',
    },
    '0x68449870eea84453044bd430822827e21fd8f101': {
      name: 'ZAIBOT.io',
      symbol: 'ZAI',
    },
    '0x6cc87c5ab2cfac0f2d582286f5ba69ca555fecb0': {
      name: 'AIRcoin',
      symbol: 'AIR',
    },
    '0x73c369f61c90f03eb0dd172e95c90208a28dc5bc': {
      name: 'OpenLeverage',
      symbol: 'OLE',
    },
    '0x764933fbad8f5d04ccd088602096655c2ed9879f': {
      name: 'Any Inu',
      symbol: 'AI',
    },
    '0x76d6556758365e63e48a0dfafd19c8dba15f97ee': {
      name: 'BIG',
      symbol: 'BIG',
    },
    '0x836aed3b0e0ee44c77e0b6db34d170abcce9baac': {
      name: 'Wand USDBx',
      symbol: 'USDBx',
    },
    '0x870a8f46b62b8bdeda4c02530c1750cddf2ed32e': {
      name: 'USDC+',
      symbol: 'USDC+',
    },
    '0x87e154e86fb691ab8a27116e93ed8d54e2b8c18c': {
      name: 'Titan Trading Token',
      symbol: 'TES',
    },
    '0x891c9b37177bdf8edc891119c9d8aeefda9a5246': {
      name: 'VROOM',
      symbol: 'VROOM',
    },
    '0xa4c7aa67189ec5623121c6c94ec757dfed932d4b': {
      name: 'Mia',
      symbol: 'MIA',
    },
    '0xb582dc28968c725d2868130752afa0c13ebf9b1a': {
      name: 'Blast Pepe',
      symbol: 'BEPE',
    },
    '0xcbf7b47e9da345812e3bd732e3ee369a7203b5ae': {
      name: 'pSTAKE Finance',
      symbol: 'PSTAKE',
    },
    '0xcc50560827465f25132929711d5b2cf78625d399': {
      name: 'Ghost Coin',
      symbol: 'GHOST',
    },
    '0xcdbe12611f18b43098202d45928c905b34736c06': {
      name: 'NOGOLD',
      symbol: 'NOGOLD',
    },
    '0xd71035849d2fba67533bf50900a3e8b684ac1b42': {
      name: 'BlastName Dot',
      symbol: 'BND',
    },
    '0xd79d6fe06f4c2b17291015169d1443f50d0c2838': {
      name: 'Wand ETHx',
      symbol: 'ETHx',
    },
    '0xd86b2b6f1169e4304be700d6522c3ff79ff8fb77': {
      name: 'Wand USB',
      symbol: 'USB',
    },
    '0xfd4d19f9fbb9f730c3c88a21755832bd2455144e': {
      name: 'SSS',
      symbol: 'SSS',
    },
	'0xb1a5700fa2358173fe465e6ea4ff52e36e88e2ad': {
		name: 'Blast',
		symbol: 'BLAST',
	},
	'0xdc60c24de182b07cb3f3a9269f120d8c15c4b381': {
		name: 'Digital Art Movement',
		symbol: 'DAM',
	},
	'0xa027a3a04b44f79560153234e999b17c88e22db9': {
		name: 'Particle',
		symbol: 'PTC',
	},
	'0x9e92c0b2b84ddac571bde330c4b44096a7c99909': {
		name: 'Tornado',
		symbol: 'TRNDO',
	},
	'0xa5370b8e2413b23ea16f3b78d1d1ba3969678227': {
		name: 'Wrapped SOL',
		symbol: 'wSOL',
	},

	'0x52056ed29fe015f4ba2e3b079d10c0b87f46e8c6': {
		name: 'USDz',
		symbol: 'USDz',
	},
	'0xbb4e01b8940e8e2b3a95ced7941969d033786ff7': {
		name: 'Affine ultraETHs 2.0',
		symbol: 'ultraETHs',
	},
	'0x59c159e5a4f4d1c86f7abdc94b7907b7473477f6': {
		name: 'BlastUP Token',
		symbol: 'BLASTUP',
	},
	'0xd85f663effcaa5d44fa69b0d5c0dc02b20957c86': {
		name: 'WrappedHypersound',
		symbol: 'WHYPERS',
	},
  '0x578122317baca7a3c7bb5301460d2f4f96e9394a': {
    name: 'Davos.xyz USD',
    symbol: 'DUSD',
  },
	'0x010392305558d58e1cb0eec5529a65bf3545f82e': {
		name: 'MACHI',
		symbol: 'MACHI',
	},
	'0xf8797db8a9eed416ca14e8dfaede2bf4e1aabfc3': {
		name: 'Hypersound',
		symbol: 'HYPERS',
	},
	},
}
