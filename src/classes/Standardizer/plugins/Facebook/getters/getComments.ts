import Facebook from '../Facebook'
import { Contact } from '../../../../../types/schemas'

const ACCOUNT_ACTIVITY_FILE = 'security_and_login_information/account_activity.json'

Facebook.prototype.getComments = async function getConnections(options) {
  const comments = await this.parser.parseAsJSON(ACCOUNT_ACTIVITY_FILE, options?.parsingOptions)

  return {
    data: comments,
    parsedFiles: [ACCOUNT_ACTIVITY_FILE],
  }
}
