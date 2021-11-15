import Discord from '../Discord'
import { Profile } from '../../../../../types/schemas'
import { MediaType } from '../../../../../types/schemas/Media'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_FILE = 'account/user.json'

Discord.prototype.getProfile = withAutoParser(async parser => {
  const { data: profile } = await parser.parseAsJSON(ACCOUNT_FILE)
  // Avatar image file can have jpeg/png extension (last update: october 2021)
  const [avatarFilePath] = await parser.findFiles(/\/avatar\..*/, 'account/')

  return {
    displayName: profile.username,
    mails: profile.email ? [{ mail: profile.email }] : undefined,
    profilePicture: {
      current: {
        url: `file:///${ avatarFilePath }`,
        type: MediaType.IMAGE,
      },
      history: [],
    },
  } as Profile
})
