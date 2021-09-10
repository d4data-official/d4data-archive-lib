import Gravatar from '../Gravatar'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'
import { GravatarRawData } from './getProfile'
import { API } from '../../../../../types/schemas'

Gravatar.prototype.getAPIs = withAutoParser(async parser => {
  const [jsonFilePath] = await parser.listFiles('', {
    extensionWhitelist: ['json'],
  })

  if (!jsonFilePath) {
    return null
  }

  const { data: fileContent } = await parser.parseAsJSON<GravatarRawData>(jsonFilePath)
  const rawData = fileContent.entry[0]

  if (!rawData) {
    return null
  }

  return rawData.accounts.map((account): API => ({
    name: account.shortname,
    username: account.username,
  }))
})
