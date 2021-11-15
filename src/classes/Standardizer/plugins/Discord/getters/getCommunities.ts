import Discord from '../Discord'
import { Community } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const COMMUNITIES_FILE = 'servers/index.json'

Discord.prototype.getCommunities = withAutoParser(async parser => {
  const { data } = await parser.parseAsJSON(COMMUNITIES_FILE)

  return Object.values(data).map((communityName: any): Community => ({
    name: communityName,
  }))
})
