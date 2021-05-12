import { RawData } from '../schemas'

export default interface RawDataReturn {
  data: RawData
  relativePath: string
  absolutePath: string
}
