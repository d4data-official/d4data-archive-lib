import Google from '../Google'
import { Connection } from '../../../../../types/schemas';

// eslint-disable-next-line
const CONNECTIONS_FOLDER = 'Takeout/Compte\ Google/'

Google.prototype.getConnections = async function getConnections(options) {
  const files = await this.parser.listFiles(CONNECTIONS_FOLDER, { extensionWhitelist: ['html'] })
  const connectionFile = await this.parser.parseAsHTML(files[0], options?.parsingOptions)
  const dom = Array.from(connectionFile.window.document.querySelectorAll('table tr')).slice(1);

  const connections = dom.map((td) => {
    const browser = td.querySelector('td:nth-of-type(4n)') !== null
      ? td.querySelector('td:nth-of-type(4n)')!.innerHTML
      : undefined

    return {
      timestamp: new Date(Date.parse(td.querySelector('td:nth-of-type(1n)')!.innerHTML)),
      ipAddress: td.querySelector('td:nth-of-type(2n)')!.innerHTML,
      browser,
    } as Connection
  })

  return {
    data: connections,
    parsedFiles: files,
  }
}
