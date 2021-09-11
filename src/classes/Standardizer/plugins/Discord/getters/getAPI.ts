import Discord from '../Discord'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'
import { API } from '../../../../../types/schemas'

Discord.prototype.getAPIs = withAutoParser(async parser => {
  const { data: profileRawData } = await parser.parseAsJSON('account/user.json')

  return profileRawData.connections.map((connection: any): API => ({
    name: connection.type,
    username: connection.name,
  }))
})
