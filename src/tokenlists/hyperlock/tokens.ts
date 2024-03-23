import { Network, TokensForList } from '../../types'
import blast from './tokens/blast'
import sepolia from './tokens/sepolia'

export const tokens: TokensForList = {
  [Network.Blast]: blast,
  [Network.Sepolia]: sepolia,
}
