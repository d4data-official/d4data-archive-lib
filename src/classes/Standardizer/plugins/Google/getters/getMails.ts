import Google from '../Google'
import { Mail } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const CONNECTIONS_FOLDER = 'Takeout/Mail'

Google.prototype.getMails = withAutoParser(async parser => {
  const files = await parser.listFiles(CONNECTIONS_FOLDER, { extensionWhitelist: ['mbox'] })

  const mails = await Promise.all<Array<Mail>>(files.map(async (file: string) => parser.parseAsMBOX(file)))

  return { data: mails.flat() }
})
