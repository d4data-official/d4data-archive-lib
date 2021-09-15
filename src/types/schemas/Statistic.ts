export enum StatisticType {
  STRING = 'string',
  NUMBER = 'number',
  PERCENTAGE = 'percentage',
  BOOLEAN = 'boolean',
  DURATION = 'duration',
  RANKING = 'ranking',
}

export type RankingStatisticValue = Array<{
  value: number | string | boolean
  label?: string
}>

export default interface Statistic {
  type: StatisticType
  value: number | string | boolean | RankingStatisticValue
  name: string
  description?: string
}
