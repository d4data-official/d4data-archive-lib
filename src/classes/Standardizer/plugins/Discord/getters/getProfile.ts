import path from 'path'
import Discord from '../Discord'
import { Contact } from '../../../../../types/schemas'
import { MediaType } from '../../../../../types/schemas/Media'

const ACCOUNT_FILE = 'account/user.json'

Discord.prototype.getProfile = async function getProfile(options) {
  const profile = await this.parser.parseAsJSON(ACCOUNT_FILE, options?.parsingOptions)
  const contact: Contact = {
    displayName: profile.username,
    mail: profile.email,
    profilePicture: {
      current: {
        url: `file:///${ path.resolve('account/avatar.png') }`,
        type: MediaType.IMAGE,
      },
      history: [],
    },
  }
  return {
    data: contact,
    parsedFiles: [ACCOUNT_FILE],
  }
}
