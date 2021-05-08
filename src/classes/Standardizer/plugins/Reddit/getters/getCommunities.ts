import Reddit from '../Reddit'
import { Community } from '../../../../../types/schemas';

const COMMUNITIES_FILE = 'subscribed_subreddits.csv'

interface RedditCommunity {
  subreddit: string
}

Reddit.prototype.getCommunities = async function getCommunities(options) {
  const communityList = await this.parser.parseAsCSV<RedditCommunity>(COMMUNITIES_FILE, options?.parsingOptions)

  const communities: Array<Community> = communityList.map((community) => ({
    name: community.subreddit,
  }))

  return {
    data: communities,
    parsedFiles: [COMMUNITIES_FILE],
  }
}
