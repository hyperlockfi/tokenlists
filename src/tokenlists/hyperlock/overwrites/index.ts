import { OverwritesForList } from '../../../types'
import { blastOverrides } from './blast'
import { sepoliaOverrides } from './sepolia'

export const overwrites: OverwritesForList = {
  ...blastOverrides,
  ...sepoliaOverrides,
}
