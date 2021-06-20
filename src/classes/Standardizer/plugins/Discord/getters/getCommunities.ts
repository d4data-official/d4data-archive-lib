import Discord from '../Discord'
import { Community } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const COMMUNITIES_FILE = 'servers/index.json'

Discord.prototype.getCommunities = withAutoParser(async parser => {
  const rawCommunities = await parser.parseAsJSON(COMMUNITIES_FILE)

  const communities = Object.values(rawCommunities).map((communityName: any): Community => ({
    name: communityName,
  }))

  return { data: communities }
})
