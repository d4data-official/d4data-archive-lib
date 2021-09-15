import Facebook from '../Facebook'
import { Connection } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_ACTIVITY_FILE = 'security_and_login_information/account_activity.json'

Facebook.prototype.getConnections = withAutoParser(async parser => {
  const { data: accountActivity } = await parser.parseAsJSON(ACCOUNT_ACTIVITY_FILE)

  return accountActivity.account_activity
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
})
