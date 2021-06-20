import Discord from '../Discord'
import { Contact } from '../../../../../types/schemas'
import { MediaType } from '../../../../../types/schemas/Media'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_FILE = 'account/user.json'

Discord.prototype.getProfile = withAutoParser(async parser => {
  const rawProfile = await parser.parseAsJSON(ACCOUNT_FILE)
  const profile: Contact = {
    displayName: rawProfile.username,
    mails: rawProfile.email ? [{ mail: rawProfile.email }] : undefined,
    profilePicture: {
      current: {
        url: `file:///${ parser.resolveRelativePath('account/avatar.png') }`,
        type: MediaType.IMAGE,
      },
      history: [],
    },
  }

  return { data: profile }
})
