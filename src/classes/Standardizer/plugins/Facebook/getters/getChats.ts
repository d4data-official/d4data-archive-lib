import Facebook from '../Facebook'
import { Contact } from '../../../../../types/schemas'

const ACCOUNT_ACTIVITY_FILE = 'security_and_login_information/account_activity.json'

Facebook.prototype.getChats = async function getConnections(options) {
  const chats = await this.parser.parseAsJSON(ACCOUNT_ACTIVITY_FILE, options?.parsingOptions)

  return {
    data: chats,
    parsedFiles: [ACCOUNT_ACTIVITY_FILE],
  }
}
