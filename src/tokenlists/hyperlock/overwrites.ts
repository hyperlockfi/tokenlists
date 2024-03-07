/* eslint-disable max-len */
import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Blast]: {
    '0x999f220296b5843b2909cc5f8b4204aaca5341d8': {
      address: "0x999f220296b5843b2909cc5f8b4204aaca5341d8",
      name: "Metastreet Punks",
      symbol: "mwsteth:WPUNKS:40",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0x999f220296b5843b2909cc5f8b4204aaca5341d8'}.png`
    },
    '0x1509706a6c66ca549ff0cb464de88231ddbe213b': {
      address: "0x1509706a6c66ca549ff0cb464de88231ddbe213b",
      name: "Aura Finance",
      symbol: "0x1509706a6c66ca549ff0cb464de88231ddbe213b",
      logoURI: `https://raw.githubusercontent.com/hyperlockfi/tokenlists/main/src/assets/images/tokens/${'0x1509706a6c66ca549ff0cb464de88231ddbe213b'}.png`
    },
  },
}
