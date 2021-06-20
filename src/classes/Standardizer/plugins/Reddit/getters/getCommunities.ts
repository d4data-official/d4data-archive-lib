import Reddit from '../Reddit'
import { Community } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const COMMUNITIES_FILE = 'subscribed_subreddits.csv'

interface RedditCommunity {
  subreddit: string
}

Reddit.prototype.getCommunities = withAutoParser(async parser => {
  const rawCommunities = await parser.parseAsCSV<RedditCommunity>(COMMUNITIES_FILE)

  const communities = rawCommunities.map((community): Community => ({
    name: community.subreddit,
  }))

  return { data: communities }
})
