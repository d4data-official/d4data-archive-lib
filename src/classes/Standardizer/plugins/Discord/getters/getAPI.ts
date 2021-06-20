import Discord from '../Discord'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'
import { API } from '../../../../../types/schemas'

Discord.prototype.getAPIs = withAutoParser(async parser => {
  const profileRawData = await parser.parseAsJSON('account/user.json')
  const APIs = profileRawData.connections.map((connection: any): API => ({
    name: connection.type,
    username: connection.name,
  }))

  return { data: APIs }
})
