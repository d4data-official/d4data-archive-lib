import Facebook from '../Facebook'
import { Contact } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_FRIENDS_FILE = 'friends/friends.json'

interface Friends {
  friends: Array<{
    name: string,
    timestamp: number
  }>
}

Facebook.prototype.getFriends = withAutoParser(async parser => {
  const friendList = await parser.parseAsJSON<Friends>(ACCOUNT_FRIENDS_FILE)

  return friendList.friends.map((friend): Contact => ({
    displayName: friend.name,
    date: new Date(friend.timestamp * 1000),
  }))
})
