import Facebook from '../Facebook'
import Calculator from '../../statClasses/Notification';
import { StatisticType } from '../../../../../types/schemas/Statistic'

Facebook.prototype.getNotificationsStatistics = async function getNotificationsStatistics() {
  const calculator = new Calculator()
  let chunk
  const size = 50
  let offset = 0
  do {
    // eslint-disable-next-line no-await-in-loop
    chunk = await this.getNotifications({
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
        description: 'average number of notifications per day',
      },
    ],
    parsedFiles: chunk?.parsedFiles ?? [],
  }
}
