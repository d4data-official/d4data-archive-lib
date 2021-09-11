import Statistic from '../schemas/Statistic'

export type StatisticGetterData = { statistics: Array<Statistic>, parsedFiles: Array<string> } | null

type StatisticGetterReturn = Promise<StatisticGetterData>

export default StatisticGetterReturn
