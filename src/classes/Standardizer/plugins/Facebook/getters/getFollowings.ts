import Facebook from '../Facebook'
import { Community, Following } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const FOLLOWINGS_FILE = 'following_and_followers/following.json'

interface Followings {
  following: Array<{
    name: string,
    timestamp: number
  }>
}

Facebook.prototype.getFollowings = withAutoParser(async parser => {
  const followingList = await parser.parseAsJSON<Followings>(FOLLOWINGS_FILE)

  return followingList.following.map((pageFollowed): Following => ({
    type: 'community',
    entity: {
      name: pageFollowed.name,
    } as Community,
    followedSince: new Date(pageFollowed.timestamp * 1000),
  }))
})
