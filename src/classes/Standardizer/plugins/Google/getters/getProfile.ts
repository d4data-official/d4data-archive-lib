import path from 'path';
import Google from '../Google'
import { Media, Profile, ProfilePicture } from '../../../../../types/schemas';

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

Google.prototype.getProfile = async function getProfile(options) {
  const accountDetails = await this.parser.parseAsJSON<GoogleProfile>(ACCOUNT_PROFILE_FILE, options?.parsingOptions)

  const birthday = accountDetails?.birthday ? new Date(accountDetails.birthday) : undefined

  const account: Profile = {
    firstName: accountDetails?.name?.givenName,
    lastName: accountDetails?.name?.familyName,
    displayName: accountDetails?.displayName,
    gender: accountDetails?.gender?.type,
    mail: accountDetails?.emails?.[0]?.value,
    birthday,
    profilePicture: {
      current: {
        url: `file:///${ path.resolve(ACCOUNT_PROFILE_PICTURE_IMAGE) }`,
      } as Media,
    } as ProfilePicture,
  }

  return {
    data: account,
    parsedFiles: [ACCOUNT_PROFILE_FILE],
  }
}
