import Discord from '../Discord'

Discord.prototype.getAPIs = async function getAPIs(options) {
  const profileRawData = await this.parser.parseAsJSON(
    'account/user.json',
    options?.parsingOptions,
  )
  const connections = profileRawData.connections.map((connection: any) => ({
    name: connection.type,
  }))

  return {
    data: connections,
    parsedFiles: ['account/user.json'],
  }
}
