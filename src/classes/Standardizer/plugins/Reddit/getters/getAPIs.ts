import Reddit from '../Reddit'
import { API } from '../../../../../types/schemas'

import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Reddit.prototype.getAPIs = withAutoParser(async parser => {
  const rawAPIs = await parser.parseAsCSV('twitter.csv')
  const APIs = rawAPIs.map((api): API => ({
    name: api.username,
  }))

  return { data: APIs }
})
