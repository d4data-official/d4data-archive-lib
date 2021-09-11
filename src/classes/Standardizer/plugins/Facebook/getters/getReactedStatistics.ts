import Facebook from '../Facebook'
import { StatisticType } from '../../../../../types/schemas/Statistic'

Facebook.prototype.getReactedStatistics = async function getReactedStatistics() {
  let Nyear = 1
  let like = 0
  let laugh = 0
  let wow = 0
  let sorry = 0
  let love = 0
  let anger = 0
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
    switch (entry.reaction.name) {
      case 'HAHA': {
        laugh += 1
        break
      }
      case 'WOW': {
        wow += 1
        break
      }
      case 'LOVE': {
        love += 1
        break
      }
      case 'ANGER': {
        anger += 1
        break
      }
      case 'SORRY': {
        sorry += 1
        break
      }
      case 'LIKE': {
        like += 1
        break
      }
      default: {
        like += 1
        break
      }
    }
  })
  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: (reactedData.data.length / Nyear).toFixed(2),
        name: 'reacted over Time',
      },
      {
        type: StatisticType.NUMBER,
        value: ((like / reactedData.data.length) * 100).toFixed(2),
        name: 'Like emoji reacted over Time',
      },
      {
        type: StatisticType.NUMBER,
        value: ((love / reactedData.data.length) * 100).toFixed(2),
        name: 'Love emoji reacted over Time',
      },
      {
        type: StatisticType.NUMBER,
        value: ((anger / reactedData.data.length) * 100).toFixed(2),
        name: 'Anger emoji reacted over Time',
      },
      {
        type: StatisticType.NUMBER,
        value: ((wow / reactedData.data.length) * 100).toFixed(2),
        name: 'Wow emoji reacted over Time',
      },
      {
        type: StatisticType.NUMBER,
        value: ((laugh / reactedData.data.length) * 100).toFixed(2),
        name: 'Laugh emoji reacted over Time',
      },
      {
        type: StatisticType.NUMBER,
        value: ((sorry / reactedData.data.length) * 100).toFixed(2),
        name: 'Sorry emoji reacted over Time',
      },
    ],
    parsedFiles: reactedData?.parsedFiles ?? [],
  }
}
