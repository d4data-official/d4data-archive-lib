import Reddit from '../Reddit'
import { Community, Following } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const FOLLOWINGS_FILE = 'subscribed_subreddits.csv'

interface RedditFollowing {
  subreddit: string
}

Reddit.prototype.getFollowings = withAutoParser(async parser => {
  const { data: followingList } = await parser.parseAsCSV<RedditFollowing>(FOLLOWINGS_FILE)

  return followingList.map((following): Following => ({
    type: 'community',
    entity: {
      name: following.subreddit,
    } as Community,
  }))
})
