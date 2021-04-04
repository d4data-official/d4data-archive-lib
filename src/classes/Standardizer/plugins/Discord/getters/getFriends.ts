import Discord from '../Discord'
import { Contact } from '../../../../../types/schemas'

const ACCOUNT_FILE = 'account/user.json'

Discord.prototype.getFriends = async function getFriends(options) {
  const profile = await this.parser.parseAsJSON(ACCOUNT_FILE, options?.parsingOptions)
  const contact: Array<Contact> = profile.relationships.map((friend: any): Contact => ({
    username: `${ friend.user.username }#${ friend.user.discriminator }`,
    displayName: friend.user.username,
  }))
  return {
    data: contact,
    parsedFiles: [ACCOUNT_FILE],
  }
}
