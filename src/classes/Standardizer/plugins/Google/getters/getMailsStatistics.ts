import Google from '../Google'
import { StatisticType } from '../../../../../types/schemas/Statistic'

Google.prototype.getMailsStatistics = async function getMailsStatistics() {
  let Nyear = 1
  const mailsData = await this.getMails({
    parsingOptions: {
      pagination: {
        offset: 0,
        items: Infinity,
      },
    },
  })

  if (!mailsData) {
    return null
  }
  mailsData.data.forEach((entry) => {
    const end = new Date(new Date().setFullYear(new Date().getFullYear() + Nyear))
    for (Nyear; entry.date! < end; Nyear += 1) {
      Nyear += 1
    }
  })

  console.log((mailsData.data.length / Nyear))
  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: (mailsData.data.length / Nyear),
        name: 'mails over Time',
      },
    ],
    parsedFiles: mailsData?.parsedFiles ?? [],
  }
}