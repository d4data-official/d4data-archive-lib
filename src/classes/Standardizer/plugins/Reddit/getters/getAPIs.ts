import Reddit from '../Reddit'
import { API } from '../../../../../types/schemas'

import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Reddit.prototype.getAPIs = withAutoParser(async parser => {
  const { data: APIRawData } = await parser.parseAsCSV('twitter.csv')

  return APIRawData.map((api): API => ({
    name: api.username,
  }))
})
