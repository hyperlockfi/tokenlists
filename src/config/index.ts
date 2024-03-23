import { Network, Configs } from '../types'
import blast from './blast'
import sepolia from './sepolia'

const config: Configs = {
  [Network.Blast]: blast,
  [Network.Sepolia]: sepolia,
}

export default config
