import Reddit from '../Reddit'
import { Profile } from '../../../../../types/schemas';

const ACCOUNT_PROFILE_FILE = 'statistics.csv'

interface RedditProfile {
  statistics?: string,
  value?: string
}

Reddit.prototype.getProfile = async function getProfile(options) {
  const accountDetails = await this.parser.parseAsCSV<RedditProfile>(ACCOUNT_PROFILE_FILE, options?.parsingOptions)

  const account: Profile = {
    displayName: accountDetails[0]?.value,
    mail: accountDetails[5]?.value,
  }

  return {
    data: account,
    parsedFiles: [ACCOUNT_PROFILE_FILE],
  }
}
