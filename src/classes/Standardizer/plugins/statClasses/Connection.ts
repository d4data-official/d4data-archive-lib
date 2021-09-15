import moment from 'moment';
import { Connection } from '../../../../types/schemas';

export default class Calculator {
  constructor() {
    this.calendar = {}
    this.ip = {}
    this.location = {}
  }

  process_record(chunk: Array<Connection>) {
    this.updateAverage(chunk)
    this.updateRanking(chunk)
  }

  private readonly calendar: Record<string, any>

  private readonly ip: Record<string, number>

  private readonly location: Record<string, number>

  private updateRanking(chunk: Array<Connection>) {
    chunk.forEach(connection => {
      // eslint-disable-next-line no-prototype-builtins
      if (!this.ip.hasOwnProperty(connection.ipAddress)) {
        this.ip[connection.ipAddress] = 1
      } else {
        this.ip[connection.ipAddress] += 1
      }
      const location = connection.location?.relativePosition?.city
      if (!location) return
      // eslint-disable-next-line no-prototype-builtins
      if (!this.location.hasOwnProperty(location)) {
        this.location[location] = 1
      } else {
        this.ip[location] += 1
      }
    })
  }

  private sort(obj: Object) {
    return Object.fromEntries(
      Object.entries(obj).sort(([,a], [,b]) => b - a),
    );
  }

  get ips() {
    return Object.entries(this.sort(this.ip)).map(([ip, nb]) => ({
      label: ip,
      value: nb,
    })).slice(0, 5)
  }

  get locations() {
    return Object.entries(this.sort(this.location)).map(([location, nb]) => ({
      label: location,
      value: nb,
    })).slice(0, 5)
  }

  private updateAverage(chunk: Array<Connection>) {
    /**
         * calendar = {
         * '09-2021': [0,100,...]
         *  ...
         * }
         */
    chunk.forEach(connection => {
      const { calendar } = this
      const date = moment(connection.timestamp)
      // eslint-disable-next-line no-prototype-builtins
      if (!calendar.hasOwnProperty(date.format('YYYY-MM'))) {
        calendar[date.format('YYYY-MM')] = Array.from(new Array(date.daysInMonth()), () => 0)
      }
      calendar[date.format('YYYY-MM')][date.date() - 1] += 1
    })
  }

  get average() {
    return this.computeAverage()
  }

  private async computeAverage() {
    const { calendar } = this
    let sum: Array<number> = []
    await Object.keys(calendar).forEach(month => {
      sum = sum.concat(calendar[month])
    })
    const nb = sum.length
    return sum.reduce((a, b) => a + b, 0) / nb
  }
}
