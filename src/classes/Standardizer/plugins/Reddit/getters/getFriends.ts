import Reddit from '../Reddit'

Reddit.prototype.getFriends = async function getFriends(options) {
  const friendsRawData = await this.parser.parseAsCSV(
    'friends.csv',
    options?.parsingOptions,
  )
  const friends = friendsRawData.map(friend => ({
    displayName: friend.username,
  }))
  return {
    data: friends,
    parsedFiles: ['friends.csv'],
  }
}
