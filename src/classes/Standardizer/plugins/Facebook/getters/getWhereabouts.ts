import Facebook from '../Facebook'
import { Whereabout, Location } from '../../../../../types/schemas'

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

Facebook.prototype.getWhereabouts = async function getWhereabouts(options) {
  const whereaboutList = await this.parser.parseAsJSON<Sessions>(ACCOUNT_WHEREABOUTS_FILE, options?.parsingOptions)

  const whereabouts : Array<Whereabout> = whereaboutList.active_sessions.map((session) => ({
    location: {
      relativePosition: {
        raw: session.location,
      },
    } as Location,
    recordDate: new Date(session.updated_timestamp * 1000),
  }))

  return {
    data: whereabouts,
    parsedFiles: [ACCOUNT_WHEREABOUTS_FILE],
  }
}
