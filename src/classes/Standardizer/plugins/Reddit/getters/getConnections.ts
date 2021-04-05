import Reddit from '../Reddit'
import { Connection } from '../../../../../types/schemas';

const CONNECTIONS_FILE = 'ip_logs.csv'

interface RedditConnection {
  date: string,
  ip: string
}

Reddit.prototype.getConnections = async function getConnections(options) {
  const connectionList = await this.parser.parseAsCSV<RedditConnection>(CONNECTIONS_FILE, options?.parsingOptions)

  const connections: Array<Connection> = connectionList
    .slice(1)
    .map((connection) => ({
      ipAddress: connection.ip,
      timestamp: new Date(connection.date),
    }))

  return {
    data: connections,
    parsedFiles: [CONNECTIONS_FILE],
  }
}
