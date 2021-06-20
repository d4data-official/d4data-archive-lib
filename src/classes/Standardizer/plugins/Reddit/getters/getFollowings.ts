import Reddit from '../Reddit'
import { Community, Following } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const FOLLOWINGS_FILE = 'subscribed_subreddits.csv'

interface RedditFollowing {
  subreddit: string
}

Reddit.prototype.getFollowings = withAutoParser(async parser => {
  const rawFollowings = await parser.parseAsCSV<RedditFollowing>(FOLLOWINGS_FILE)

  const followings = rawFollowings.map((following): Following => ({
    type: 'community',
    entity: {
      name: following.subreddit,
    } as Community,
  }))

  return { data: followings }
})
