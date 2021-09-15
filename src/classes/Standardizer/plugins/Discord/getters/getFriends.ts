import Discord from '../Discord'
import { Contact } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_FILE = 'account/user.json'

Discord.prototype.getFriends = withAutoParser(async parser => {
  const { data: profile } = await parser.parseAsJSON(ACCOUNT_FILE)

  return profile.relationships.map((friend: any): Contact => ({
    username: `${ friend.user.username }#${ friend.user.discriminator }`,
    displayName: friend.user.username,
  }))
})
