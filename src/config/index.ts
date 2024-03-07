import { Network, Configs } from '../types'
import ethereum from './ethereum'
import blast from './blast'

const config: Configs = {
  [Network.Ethereum]: ethereum,
  [Network.Blast]: blast,
}

export default config
