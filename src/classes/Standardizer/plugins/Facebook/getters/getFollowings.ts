import Facebook from '../Facebook'
import { Community, Following } from '../../../../../types/schemas'

const FOLLOWINGS_FILE = 'following_and_followers/following.json'

interface Followings {
  followings: Array<{
    name: string,
    timestamp: number
  }>
}

Facebook.prototype.getFollowings = async function getFollowings(options) {
  const followingList = await this.parser.parseAsJSON<Followings>(FOLLOWINGS_FILE, options?.parsingOptions)

  const followings : Array<Following> = followingList.followings.map((pageFollowed) => ({
    type: 'community',
    entity: {
      name: pageFollowed.name,
    } as Community,
    followedSince: new Date(pageFollowed.timestamp * 1000),
  }))

  return {
    data: followings,
    parsedFiles: [FOLLOWINGS_FILE],
  }
}
