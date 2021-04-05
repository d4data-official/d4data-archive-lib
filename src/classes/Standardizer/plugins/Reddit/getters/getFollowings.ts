import Reddit from '../Reddit'
import { Community, Following } from '../../../../../types/schemas';

const FOLLOWINGS_FILE = 'subscribed_subreddits.csv'

interface RedditFollowing {
  subreddit: string
}

Reddit.prototype.getFollowings = async function getFollowings(options) {
  const followingList = await this.parser.parseAsCSV<RedditFollowing>(FOLLOWINGS_FILE, options?.parsingOptions)

  const followings: Array<Following> = followingList.map((following) => ({
    type: 'community',
    entity: {
      name: following.subreddit,
    } as Community,
  }))

  return {
    data: followings,
    parsedFiles: [FOLLOWINGS_FILE],
  }
}
