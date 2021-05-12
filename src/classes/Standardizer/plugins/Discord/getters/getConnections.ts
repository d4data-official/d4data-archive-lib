import Discord from '../Discord'
import { Connection } from '../../../../../types/schemas'

const BASE_CONNECTIONS_FOLDER = 'activity/reporting/'

Discord.prototype.getConnections = async function getConnections(options) {
  const files = await this.parser.listFiles(BASE_CONNECTIONS_FOLDER, { extensionWhitelist: ['.json'] })
  const connections : Array<Connection> = []

  for await (const file of files) {
    const connectionFile = await this.parser.parseAsJSONL(file, {
      filter: (unparsedLine) => (unparsedLine.startsWith('{"event_type":"add_reaction"')),
      ...options?.parsingOptions,
    })
    connectionFile.forEach((row) => {
      connections.push({
        ipAddress: row.ip,
        location: {
          relativePosition: {
            raw: row.city,
            city: row.city,
            country: row.country_code,
            zipcode: row.region_code,
          },
        },
        browser: row.browser_user_agent,
        timestamp: new Date(row.timestamp),
      })
    })
  }

  return {
    data: connections,
    parsedFiles: files,
  }
}
