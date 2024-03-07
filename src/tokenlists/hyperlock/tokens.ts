import { Network, TokensForList } from '../../types'
import ethereum from './tokens/ethereum'
import blast from './tokens/blast'

export const tokens: TokensForList = {
  [Network.Ethereum]: ethereum,
  [Network.Blast]: blast,
}
