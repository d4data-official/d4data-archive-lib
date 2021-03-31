import Facebook from '../Facebook'
import { Connection } from '../../../../../types/schemas'

const ACCOUNT_ACTIVITY_FILE = 'security_and_login_information/account_activity.json'

Facebook.prototype.getConnections = async function getConnections(options) {
  const accountActivity = await this.parser.parseAsJSON(ACCOUNT_ACTIVITY_FILE, options?.parsingOptions)
  const connections: Array<Connection> = accountActivity.account_activity
    .map((connection: Record<string, any>): Connection => ({
      ipAddress: connection.ip_address,
      location: {
        relativePosition: {
          raw: [connection.city, connection.region, connection.country].filter(item => item).join(' '),
          city: connection.city,
          country: connection.country,
        },
      },
      timestamp: new Date(connection.timestamp * 1000),
      browser: connection.user_agent,
    }))

  return {
    data: connections,
    parsedFiles: [ACCOUNT_ACTIVITY_FILE],
  }
}
