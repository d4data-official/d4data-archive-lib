import Facebook from '../Facebook'
import { StatisticType } from '../../../../../types/schemas/Statistic'

Facebook.prototype.getFollowingsStatistics = async function getFollowingsStatistics() {
  let Nyear = 1
  let NbContact = 0
  const followingData = await this.getFollowings({
    parsingOptions: {
      pagination: {
        offset: 0,
        items: Infinity,
      },
    },
  })

  if (!followingData) {
    return null
  }
  followingData.data.forEach((entry) => {
    const end = new Date(new Date().setFullYear(new Date().getFullYear() + Nyear))
    if (entry.type === 'contact') {
      NbContact += 1
    }
    for (Nyear; entry.followedSince! < end; Nyear += 1) {
      Nyear += 1
    }
  })

  console.log((followingData.data.length / Nyear))
  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: (followingData.data.length / Nyear),
        name: 'Following over Time',
      },
      {
        type: StatisticType.NUMBER,
        value: (NbContact / followingData.data.length) * 100,
        name: 'Contact pourcentage',
      },
      {
        type: StatisticType.NUMBER,
        value: ((NbContact / followingData.data.length) - 1) * -100,
        name: 'Community pourcentage',
      },
    ],
    parsedFiles: followingData?.parsedFiles ?? [],
  }
}