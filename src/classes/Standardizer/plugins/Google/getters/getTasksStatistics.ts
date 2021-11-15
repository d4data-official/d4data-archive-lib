import Google from '../Google'
import Calculator from '../../statClasses/Task';
import { StatisticType } from '../../../../../types/schemas/Statistic'

Google.prototype.getTasksStatistics = async function getTasksStatistics() {
  const calculator = new Calculator()
  let chunk
  const size = 50
  let offset = 0
  do {
    // eslint-disable-next-line no-await-in-loop
    chunk = await this.getTasks({
      parsingOptions: {
        pagination: {
          offset,
          items: size,
        },
      },
    })
    calculator.process_record(chunk?.data ?? [])
    offset += size
  } while (chunk?.data?.length === 50)

  return {
    statistics: [
      {
        name: 'Monthly Average',
        type: StatisticType.NUMBER,
        value: await calculator.average,
        description: 'average number of tasks created per Month',
      },
      {
        name: 'Tasks Done',
        type: StatisticType.PERCENTAGE,
        value: calculator.percentDone,
        description: 'percentage of tasks done',
      },
    ],
    parsedFiles: chunk?.parsedFiles ?? [],
  }
}
