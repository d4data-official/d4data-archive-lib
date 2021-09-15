import moment from 'moment';
import { Transaction } from '../../../../types/schemas';
import { StatisticType } from '../../../../types/schemas/Statistic';

interface Amounts {
  [key: string]: number
}

export default class Calculator {
  private readonly spent: Amounts

  private currency: Array<string>

  constructor() {
    this.currency = []
    this.spent = {}
    this.calendars = []
  }

  process_record(chunk: Array<Transaction>) {
    this.updateSpent(chunk)
    this.updateAverage(chunk)
  }

  private updateSpent(chunk: Array<Transaction>) {
    chunk.forEach((item) => {
      // eslint-disable-next-line no-prototype-builtins
      if (!this.spent.hasOwnProperty(item.currency)) this.spent[item.currency] = 0
      this.spent[item.currency] += item?.value ?? 0
    })
  }

  private readonly calendars: Array<Record<string, any>>

  private updateAverage(chunk: Array<Transaction>) {
    /**
         * calendar = {
         * '09-2021': [[], [0,100], [],...]
         *  ...
         * }
         */
    chunk.forEach(transaction => {
      if (this.currency.indexOf(transaction.currency) === -1) {
        this.currency.push(transaction.currency)
        this.calendars.push({})
      }
      const calendar = this.calendars[this.currency.indexOf(transaction.currency)]
      const date = moment(transaction.date)
      if (!date.isValid()) return
      // eslint-disable-next-line no-prototype-builtins
      if (!calendar.hasOwnProperty(date.format('YYYY-MM'))) {
        calendar[date.format('YYYY-MM')] = Array.from(new Array(date.daysInMonth()), () => [])
      }
      calendar[date.format('YYYY-MM')][date.date() - 1].push(transaction.value)
    })
  }

  get total() {
    return {
      type: StatisticType.RANKING,
      name: 'total',
      value: Object.keys(this.spent).map(currency => ({
        label: currency,
        value: this.spent[currency],
      })),
    }
  }

  get averages() {
    return this.buildStat()
  }

  private async buildStat() {
    const average = this.currency.map(async currency => ({
      label: currency,
      value: await this.computeAverage(currency),
    }))
    return Promise.all(average)
  }

  private async computeAverage(currency: string) {
    /**
         * calendar_processed =
         * {'09-2021': 3454 //average, ...}
         */
    const calendar = this.calendars[this.currency.indexOf(currency)]
    let sum = 0
    await Object.keys(calendar).forEach(month => {
      calendar[month] = calendar[month].map((day: Array<number>) => {
        if (!day.length) return 0
        return day.reduce((a: number, b: number) => a + b, 0)
      })
      const nb = calendar[month].length
      calendar[month] = calendar[month].reduce((a: number, b: number) => a + b, 0)
      calendar[month] /= nb
      sum += calendar[month]
    })
    return (sum /= Object.keys(calendar).length) || 0
  }
}
