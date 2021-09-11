import { ParsingPaginationInfo } from '../Parsing'

export type GetterData<T> = {
  data: T,
  pagination?: ParsingPaginationInfo | null,
  parsedFiles: Array<string>
} | null

type GetterReturn<T> = Promise<GetterData<T>>

export default GetterReturn
