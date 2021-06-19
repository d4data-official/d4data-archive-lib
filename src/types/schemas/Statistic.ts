export enum StatisticType {
  STRING = 'string',
  NUMBER = 'number',
  PERCENTAGE = 'percentage',
  BOOLEAN = 'boolean',
}

export default interface Statistic {
  type: StatisticType
  value: string | number | boolean
  name: string
  description?: string
}
