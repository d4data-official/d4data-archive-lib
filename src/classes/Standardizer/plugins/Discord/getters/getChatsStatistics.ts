import Discord from '../Discord'
import { StatisticType } from '../../../../../types/schemas/Statistic'

Discord.prototype.getChatsStatistics = async function getChatsStatistics() {
  const chatsData = await this.getChats({
    parsingOptions: {
      pagination: {
        offset: 0,
        items: Infinity,
      },
    },
  })

  if (!chatsData) {
    return null
  }
  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: chatsData.data.length,
        name: 'Total of chats',
      },
    ],
    parsedFiles: chatsData?.parsedFiles ?? [],
  }
}
