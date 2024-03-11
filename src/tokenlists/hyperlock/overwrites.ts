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
  },
}
