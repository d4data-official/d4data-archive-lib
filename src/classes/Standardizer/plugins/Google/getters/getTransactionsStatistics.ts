import Google from '../Google'
import Calculator from '../../statClasses/Transaction';
import { StatisticType } from '../../../../../types/schemas/Statistic';

Google.prototype.getTransactionsStatistics = async function getTransactionsStatistics() {
  const calculator = new Calculator()
  let chunk
  const size = 50
  let offset = 0
  do {
    // eslint-disable-next-line no-await-in-loop
    chunk = await this.getTransactions({
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
      calculator.total,
      {
        type: StatisticType.RANKING,
        name: 'AverageMonth',
        value: await calculator.averages,
      },
    ],
    parsedFiles: chunk?.parsedFiles ?? [],
  }
}
