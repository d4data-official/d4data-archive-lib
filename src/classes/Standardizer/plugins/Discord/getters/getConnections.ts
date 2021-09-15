import Discord from '../Discord'
import { Connection } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const BASE_CONNECTIONS_FOLDER = 'activity/reporting/'

Discord.prototype.getConnections = withAutoParser(async parser => {
  const files = await parser.listFiles(BASE_CONNECTIONS_FOLDER, { extensionWhitelist: ['json'] })
  const connections: Array<Connection> = []

  for await (const file of files) {
    const { data: connectionFile } = await parser.parseAsJSONL(file, {
      filter: (unparsedLine) => (unparsedLine.startsWith('{"event_type":"session_start"')),
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
        browser: row.browser,
        timestamp: new Date(row.timestamp.slice(1, -1)),
      })
    })
  }
  return connections
})
