import Statistic from '../schemas/Statistic'

export type GetterData<T> = {
  data: T,
  parsedFiles: Array<string>,
  statistics?: Array<Statistic>,
} | null

type GetterReturn<T> = Promise<GetterData<T>>

export default GetterReturn
