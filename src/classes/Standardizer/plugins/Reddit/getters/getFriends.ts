import Reddit from '../Reddit'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'
import { Contact } from '../../../../../types/schemas'

Reddit.prototype.getFriends = withAutoParser(async parser => {
  const rawFriends = await parser.parseAsCSV('friends.csv')
  const friends = rawFriends.map((friend: any): Contact => ({
    displayName: friend.username,
  }))

  return { data: friends }
})
