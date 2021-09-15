import Google from '../Google'
import Calculator from '../../statClasses/Connection';
import { StatisticType } from '../../../../../types/schemas/Statistic'

Google.prototype.getConnectionsStatistics = async function getConnectionsStatistics() {
  const calculator = new Calculator()
  let chunk
  const size = 50
  let offset = 0
  do {
    // eslint-disable-next-line no-await-in-loop
    chunk = await this.getConnections({
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
        description: 'average number of connections per month',
      },
      {
        name: 'Top IPs',
        type: StatisticType.RANKING,
        value: calculator.ips,
      },
      {
        name: 'Top locations',
        type: StatisticType.RANKING,
        value: calculator.locations,
      },
    ],
    parsedFiles: chunk?.parsedFiles ?? [],
  }
}
