import Reddit from '../Reddit'

Reddit.prototype.getAPIs = async function getAPIs(options) {
  const APIRawData = await this.parser.parseAsCSV(
    'twitter.csv',
    options?.parsingOptions,
  )
  const stck = APIRawData.map(api => ({
    name: api.username,
  }))
  return {
    data: stck,
    parsedFiles: ['twitter.csv'],
  }
}
