import Reddit from '../Reddit'
import { Connection } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const CONNECTIONS_FILE = 'ip_logs.csv'

interface RedditConnection {
  date: string,
  ip: string
}

Reddit.prototype.getConnections = withAutoParser(async parser => {
  const rawConnections = await parser.parseAsCSV<RedditConnection>(CONNECTIONS_FILE)

  const connections = rawConnections.slice(1).map((connection): Connection => ({
    ipAddress: connection.ip,
    timestamp: new Date(connection.date),
  }))

  return { data: connections }
})
