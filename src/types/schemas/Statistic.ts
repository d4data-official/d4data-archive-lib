export enum StatisticType {
  STRING = 'string',
  NUMBER = 'number',
  PERCENTAGE = 'percentage',
  BOOLEAN = 'boolean',
  DURATION = 'duration',
  RANKING = 'ranking',
}

export default interface Statistic {
  type: StatisticType
  value: number | string | boolean | Array<{
    value: number | string | boolean
    label?: string
  }>
  name: string
  description?: string
}
