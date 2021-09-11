import Discord from '../Discord'
import { StatisticType } from '../../../../../types/schemas/Statistic'

Discord.prototype.getReactedStatistics = async function getReactedStatistics() {
  let Nyear = 1
  const reactedData = await this.getReacted({
    parsingOptions: {
      pagination: {
        offset: 0,
        items: Infinity,
      },
    },
  })

  if (!reactedData) {
    return null
  }
  reactedData.data.forEach((entry) => {
    const end = new Date(new Date().setFullYear(new Date().getFullYear() - Nyear))
    for (Nyear; entry.reaction.reactionDate! < end; Nyear += 1) {
      Nyear += 1
      break
    }
  })
  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: (reactedData.data.length / Nyear).toFixed(2),
        name: 'reacted over Time',
      },
    ],
    parsedFiles: reactedData?.parsedFiles ?? [],
  }
}
