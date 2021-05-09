import Facebook from '../Facebook'
import { Contact } from '../../../../../types/schemas'

const ACCOUNT_FRIENDS_FILE = 'friends/friends.json'

interface Friends {
  friends: Array<{
    name: string,
    timestamp: number
  }>
}

Facebook.prototype.getFriends = async function getFriends(options) {
  const friendList = await this.parser.parseAsJSON<Friends>(ACCOUNT_FRIENDS_FILE, options?.parsingOptions)

  const friends: Array<Contact> = friendList.friends.map((friend) => ({
    displayName: friend.name,
    date: new Date(friend.timestamp * 1000),
  }))

  return {
    data: friends,
    parsedFiles: [ACCOUNT_FRIENDS_FILE],
  }
}
