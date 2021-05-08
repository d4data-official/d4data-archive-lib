import Google from '../Google'
import { Mail } from '../../../../../types/schemas'

// eslint-disable-next-line
const CONNECTIONS_FOLDER = 'Takeout/Mail'

Google.prototype.getMails = async function getMails(options) {
  const files = await this.parser.listFiles(CONNECTIONS_FOLDER, { extensionWhitelist: ['mbox'] });

  const mails = await Promise.all<Array<Mail>>(files.map(async (file) => this.parser.parseAsMBOX(file,
    options?.parsingOptions)))

  return {
    data: mails.flat(),
    parsedFiles: files,
  }
}
