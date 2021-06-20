import Discord from '../Discord'
import { Contact } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_FILE = 'account/user.json'

Discord.prototype.getFriends = withAutoParser(async parser => {
  const rawProfile = await parser.parseAsJSON(ACCOUNT_FILE)

  const friends = rawProfile.relationships.map((friend: any): Contact => ({
    username: `${ friend.user.username }#${ friend.user.discriminator }`,
    displayName: friend.user.username,
  }))

  return { data: friends }
})
