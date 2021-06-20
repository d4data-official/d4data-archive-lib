import Facebook from '../Facebook'
import { Location, Whereabout } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_WHEREABOUTS_FILE = 'security_and_login_information/where_you\'re_logged_in.json'

interface Sessions {
  active_sessions: Array<{
    created_timestamp: number,
    updated_timestamp: number,
    ip_address: string,
    user_agent: string,
    datr_cookie: string,
    device: string,
    location: string,
    app: string
  }>
}

Facebook.prototype.getWhereabouts = withAutoParser(async parser => {
  const rawWhereabouts = await parser.parseAsJSON<Sessions>(ACCOUNT_WHEREABOUTS_FILE)

  const whereabouts = rawWhereabouts.active_sessions.map((session): Whereabout => ({
    location: {
      relativePosition: {
        raw: session.location,
      },
    } as Location,
    recordDate: new Date(session.updated_timestamp * 1000),
  }))

  return { data: whereabouts }
})
