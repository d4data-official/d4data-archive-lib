import Reddit from '../Reddit'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'
import { Contact } from '../../../../../types/schemas'

Reddit.prototype.getFriends = withAutoParser(async parser => {
  const { data: friendsRawData } = await parser.parseAsCSV('friends.csv')

  return friendsRawData.map((friend: any): Contact => ({
    displayName: friend.username,
  }))
})
