import Reddit from '../Reddit'
import { Community } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const COMMUNITIES_FILE = 'subscribed_subreddits.csv'

interface RedditCommunity {
  subreddit: string
}

Reddit.prototype.getCommunities = withAutoParser(async parser => {
  const { data: communityList } = await parser.parseAsCSV<RedditCommunity>(COMMUNITIES_FILE)

  return communityList.map((community): Community => ({
    name: community.subreddit,
  }))
})
