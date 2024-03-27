/* eslint-disable max-len */
import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Blast]: {
    // tokens
    '0x999f220296b5843b2909cc5f8b4204aaca5341d8': {
      address: "0x999f220296b5843b2909cc5f8b4204aaca5341d8",
      name: "Metastreet Punks",
      symbol: "mwsteth:WPUNKS:40",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0x999f220296b5843b2909cc5f8b4204aaca5341d8'}.png`
    },
    '0x1509706a6c66ca549ff0cb464de88231ddbe213b': {
      address: "0x1509706a6c66ca549ff0cb464de88231ddbe213b",
      name: "Aura Finance",
      symbol: "AURA",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0x1509706a6c66ca549ff0cb464de88231ddbe213b'}.png`
    },
    '0xb9dfcd4cf589bb8090569cb52fac1b88dbe4981f': {
      address: "0xb9dfcd4cf589bb8090569cb52fac1b88dbe4981f",
      name: "BAG",
      symbol: "BAG",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0xb9dfcd4cf589bb8090569cb52fac1b88dbe4981f'}.png`
    },
    '0x2416092f143378750bb29b79ed961ab195cceea5': {
      address: "0x2416092f143378750bb29b79ed961ab195cceea5",
      name: "Renzo Restaked ETH",
      symbol: "ezETH",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0x2416092f143378750bb29b79ed961ab195cceea5'}.png`
    },
    '0xca84812e477ee5a96a92328689d8ce2589ab6ffd': {
      address: "0xca84812e477ee5a96a92328689d8ce2589ab6ffd",
      name: "ALIEN",
      symbol: "ALIEN",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0xca84812e477ee5a96a92328689d8ce2589ab6ffd'}.png`
    },
    '0x5fe8534a6f96cb01261bd96e98c17c2c1cab3204': {
      address: "0x5fe8534a6f96cb01261bd96e98c17c2c1cab3204",
      name: "Baja",
      symbol: "BAJA",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0x5fe8534a6f96cb01261bd96e98c17c2c1cab3204'}.png`
    },
    '0x20fe91f17ec9080e3cac2d688b4ecb48c5ac3a9c': {
      address: "0x20fe91f17ec9080e3cac2d688b4ecb48c5ac3a9c",
      name: "YES",
      symbol: "YES",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0x20fe91f17ec9080e3cac2d688b4ecb48c5ac3a9c'}.png`
    },
    // points
    '0x0000000000000000000000000000000000000001': {
      address: "0x0000000000000000000000000000000000000001",
      name: "JUICE",
      symbol: "JUICE",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'juice'}.png`
    },
    '0x0000000000000000000000000000000000000002': {
      address: "0x0000000000000000000000000000000000000002",
      name: "METASTREET",
      symbol: "METASTREET",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'metastreet'}.png`
    },
    '0x0000000000000000000000000000000000000003': {
      address: "0x0000000000000000000000000000000000000003",
      name: "THRUST",
      symbol: "THRUST",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'thruster'}.png`
    },
    '0x0000000000000000000000000000000000000004': {
      address: "0x0000000000000000000000000000000000000004",
      name: "BLAST",
      symbol: "BLAST",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'blast'}.png`
    },
    '0x0000000000000000000000000000000000000005': {
      address: "0x0000000000000000000000000000000000000005",
      name: "HYPER",
      symbol: "HYPER",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'hyper'}.png`
    },
    '0x0000000000000000000000000000000000000006': {
      address: "0x0000000000000000000000000000000000000006",
      name: "RENZO",
      symbol: "RENZO",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'renzo'}.png`
    },
    '0x0000000000000000000000000000000000000007': {
      address: "0x0000000000000000000000000000000000000007",
      name: "EIGEN",
      symbol: "EIGEN",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'eigen'}.png`
    },
    // yield
    // weth: {
    //   address: '0xecc3b335c95b28a9477c42c847be6d8cac80cf25', // Market
    //   token: '0x4300000000000000000000000000000000000004', // WETH
    //   pt: '0xd4154f0175f5423de93dd1e1499f3a6801465375', // PT
    //   yt: '0x22c1c2f9695d0cf8054472ef70510ec7c9640d04', // YT
    //   sy: '0xb80ad10dffdd415c2159962c1b35ef6edcf1b505', // SY
    //   erc4626: '0x1856c7e0b559e9d7287473cb4b4786398db4032a', // HyperWETH
    // },
    '0x4300000000000000000000000000000000000003': {
      address: "0x4300000000000000000000000000000000000003",
      name: "USDB",
      symbol: "USDB",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`
    },
    '0x1cde6a099a1cb14f3093d2b7cb5b7cbb2145cb64': {
      address: "0x1cde6a099a1cb14f3093d2b7cb5b7cbb2145cb64",
      name: "USDB-PT",
      symbol: "USDB-PT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-pt'}.png`
    },
    '0xc878aeb90e6c35d81a8ceaa8dbb89b35aee81c87': {
      address: "0xc878aeb90e6c35d81a8ceaa8dbb89b35aee81c87",
      name: "USDB-YT",
      symbol: "USDB-YT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-pt'}.png`
    },
    '0x13293dacab830d8fa2e0e961fb997b3f37186f46': {
      address: "0x13293dacab830d8fa2e0e961fb997b3f37186f46",
      name: "USDB-SY",
      symbol: "USDB-SY",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-sy'}.png`
    },
    '0x390b781baf1e6db546cf4e3354b81446947838d2': {
      address: "0x390b781baf1e6db546cf4e3354b81446947838d2",
      name: "HyperUSDB",
      symbol: "HyperUSDB",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-lp'}.png`
    },
    '0x4300000000000000000000000000000000000004': {
      address: "0x4300000000000000000000000000000000000004",
      name: "WETH",
      symbol: "WETH",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`
    },
    '0xd4154f0175f5423de93dd1e1499f3a6801465375': {
      address: "0x0e402b19f5bb665e558f197db3ed1ffbb6369876",
      name: "WETH-PT",
      symbol: "WETH-PT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-pt'}.png`
    },
    '0x22c1c2f9695d0cf8054472ef70510ec7c9640d04': {
      address: "0x22c1c2f9695d0cf8054472ef70510ec7c9640d04",
      name: "WETH-YT",
      symbol: "WETH-YT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-yt'}.png`
    },
    '0xb80ad10dffdd415c2159962c1b35ef6edcf1b505': {
      address: "0xb80ad10dffdd415c2159962c1b35ef6edcf1b505",
      name: "WETH-SY",
      symbol: "WETH-SY",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-sy'}.png`
    },
    '0x1856c7e0b559e9d7287473cb4b4786398db4032a': {
      address: "0x1856c7e0b559e9d7287473cb4b4786398db4032a",
      name: "HyperWETH",
      symbol: "HyperWETH",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-lp'}.png`
    },
  },
  [Network.Sepolia]: {
    // points
    '0x0000000000000000000000000000000000000001': {
      address: "0x0000000000000000000000000000000000000001",
      name: "JUICE",
      symbol: "JUICE",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'juice'}.png`
    },
    '0x0000000000000000000000000000000000000002': {
      address: "0x0000000000000000000000000000000000000002",
      name: "METASTREET",
      symbol: "METASTREET",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'metastreet'}.png`
    },
    '0x0000000000000000000000000000000000000003': {
      address: "0x0000000000000000000000000000000000000003",
      name: "THRUST",
      symbol: "THRUST",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'thruster'}.png`
    },
    '0x0000000000000000000000000000000000000004': {
      address: "0x0000000000000000000000000000000000000004",
      name: "BLAST",
      symbol: "BLAST",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'blast'}.png`
    },
    '0x0000000000000000000000000000000000000005': {
      address: "0x0000000000000000000000000000000000000005",
      name: "HYPER",
      symbol: "HYPER",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'hyper'}.png`
    },
    '0x0000000000000000000000000000000000000006': {
      address: "0x0000000000000000000000000000000000000006",
      name: "RENZO",
      symbol: "RENZO",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'renzo'}.png`
    },
    '0x0000000000000000000000000000000000000007': {
      address: "0x0000000000000000000000000000000000000007",
      name: "EIGEN",
      symbol: "EIGEN",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/points/${'eigen'}.png`
    },
    // yield
    '0x4200000000000000000000000000000000000022': {
      address: "0x4200000000000000000000000000000000000022",
      name: "USDB",
      symbol: "USDB",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb'}.png`
    },
    '0x2100d2da8d51269607cdc503e58242471c5d54e7': {
      address: "0x2100d2da8d51269607cdc503e58242471c5d54e7",
      name: "USDB-PT",
      symbol: "USDB-PT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-pt'}.png`
    },
    '0x0af63da91f2a50823863ab232253781cfd2b4695': {
      address: "0x0af63da91f2a50823863ab232253781cfd2b4695",
      name: "USDB-YT",
      symbol: "USDB-YT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-yt'}.png`
    },
    '0x52a53f25b2b717a02613a9259d3ed6a189b9d22a': {
      address: "0x52a53f25b2b717a02613a9259d3ed6a189b9d22a",
      name: "USDB-SY",
      symbol: "USDB-SY",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'usdb-sy'}.png`
    },
    '0x4200000000000000000000000000000000000023': {
      address: "0x4200000000000000000000000000000000000023",
      name: "WETH",
      symbol: "WETH",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth'}.png`
    },
    '0x0e402b19f5bb665e558f197db3ed1ffbb6369876': {
      address: "0x0e402b19f5bb665e558f197db3ed1ffbb6369876",
      name: "WETH-PT",
      symbol: "WETH-PT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-pt'}.png`
    },
    '0x6c07e20e618ac8b3f5f25b30d358ba62a458fd4d': {
      address: "0x6c07e20e618ac8b3f5f25b30d358ba62a458fd4d",
      name: "WETH-YT",
      symbol: "WETH-YT",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-yt'}.png`
    },
    '0xa1dd7ee93b5990851fca04257232d7062fe9c315': {
      address: "0xa1dd7ee93b5990851fca04257232d7062fe9c315",
      name: "WETH-SY",
      symbol: "WETH-SY",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/yield/${'weth-sy'}.png`
    },
  },
}
