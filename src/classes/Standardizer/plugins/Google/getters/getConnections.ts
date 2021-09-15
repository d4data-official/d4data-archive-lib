import Google from '../Google'
import { Connection } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

// eslint-disable-next-line
const CONNECTIONS_FOLDER = 'Takeout/Compte\ Google/'

Google.prototype.getConnections = withAutoParser(async parser => {
  const files = await parser.listFiles(CONNECTIONS_FOLDER, { extensionWhitelist: ['html'] })
  const { data: connectionFileDOM } = await parser.parseAsHTML(files[0])
  const connectionList = Array.from(connectionFileDOM.window.document.querySelectorAll('table tr')).slice(1)

  const connections = connectionList.map((td) => {
    const browser = td.querySelector('td:nth-of-type(4n)') !== null
      ? td.querySelector('td:nth-of-type(4n)')!.innerHTML
      : undefined

    return {
      timestamp: new Date(Date.parse(td.querySelector('td:nth-of-type(1n)')!.innerHTML)),
      ipAddress: td.querySelector('td:nth-of-type(2n)')!.innerHTML,
      browser,
    } as Connection
  })

  return connections
})
