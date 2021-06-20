import Google from '../Google'
import { Media, Profile, ProfilePicture } from '../../../../../types/schemas'
import { MediaType } from '../../../../../types/schemas/Media'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_PROFILE_FOLDER = 'Takeout/Profil'
const ACCOUNT_PROFILE_FILE = `${ ACCOUNT_PROFILE_FOLDER }/Profil.json`
const ACCOUNT_PROFILE_PICTURE_IMAGE = `${ ACCOUNT_PROFILE_FOLDER }/Photo_de_profil.jpg`

interface GoogleProfile {
  name?: {
    givenName?: string,
    familyName?: string,
    formattedName?: string
  },
  displayName?: string,
  emails?: Array<{
    value?: string
  }>,
  organizations?: Array<{
    name?: string,
    startDate?: string,
    endDate?: string,
    type?: string,
    primary?: boolean,
  }>,
  birthday?: string,
  gender?: {
    type: string
  },
}

Google.prototype.getProfile = withAutoParser(async parser => {
  if (!(await parser.filesExist([ACCOUNT_PROFILE_FILE]))) {
    return null
  }
  const accountDetails = await parser.parseAsJSON<GoogleProfile>(ACCOUNT_PROFILE_FILE)
  const birthday = accountDetails?.birthday ? new Date(accountDetails.birthday) : undefined
  const mail = accountDetails?.emails?.[0]?.value

  const account: Profile = {
    firstName: accountDetails?.name?.givenName,
    lastName: accountDetails?.name?.familyName,
    displayName: accountDetails?.displayName,
    gender: accountDetails?.gender?.type,
    mails: mail ? [{ mail }] : undefined,
    birthday,
    profilePicture: {
      current: {
        url: `file://${ parser.resolveRelativePath(ACCOUNT_PROFILE_PICTURE_IMAGE) }`,
        type: MediaType.IMAGE,
      } as Media,
    } as ProfilePicture,
  }

  return account
})
