import moment from 'moment';
import { TaskList } from '../../../../types/schemas';

export default class Calculator {
  constructor() {
    this.calendar = {}
    this.total = 0
    this.done = 0
  }

  process_record(chunk: Array<TaskList>) {
    this.updateAverage(chunk)
    this.updateTotal(chunk)
  }

  private readonly calendar: Record<string, any>

  private total: number

  private done: number

  private updateTotal(chunk: Array<TaskList>) {
    chunk.forEach(taskList => {
      taskList.tasks.forEach(task => {
        this.total += 1
        this.done += task.status === 'done' ? 1 : 0
      })
    })
  }

  private updateAverage(chunk: Array<TaskList>) {
    /**
     * calendar = {
     * '09-2021': [0,100,...]
     *  ...
     * }
     */
    chunk.forEach(taskList => {
      taskList.tasks.forEach(task => {
        const { calendar } = this
        const date = moment(task.createdAt)
        // eslint-disable-next-line no-prototype-builtins
        if (!calendar.hasOwnProperty(date.format('YYYY-MM'))) {
          calendar[date.format('YYYY-MM')] = Array.from(new Array(date.daysInMonth()), () => 0)
        }
        calendar[date.format('YYYY-MM')][date.date() - 1] += 1
      })
    })
  }

  get average() {
    return this.computeAverage()
  }

  get percentDone() {
    return (this.done * 100) / this.total
  }

  private async computeAverage() {
    const { calendar } = this
    const sum: Array<number> = []
    await Object.keys(calendar).forEach(month => {
      sum.push(calendar[month].reduce((a: number, b: number) => a + b, 0))
    })
    const nb = sum.length
    return sum.reduce((a, b) => a + b, 0) / nb
  }
}
