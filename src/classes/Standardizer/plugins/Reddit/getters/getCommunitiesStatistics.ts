import Reddit from '../Reddit'
import { StatisticType } from '../../../../../types/schemas/Statistic'

const COMMUNITIES_FILE = 'subscribed_subreddits.csv'

Reddit.prototype.getCommunitiesStatistics = async function getCommunitiesStatistics() {
  const list = await this.getCommunities()
  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: list?.data.length ?? 0,
        name: 'Communities number.',
      },
    ],
    parsedFiles: [COMMUNITIES_FILE] ?? [],
  }
}
