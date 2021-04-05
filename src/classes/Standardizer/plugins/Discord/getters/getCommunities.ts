import Discord from '../Discord'
import { Community } from '../../../../../types/schemas'

const COMMUNITIES_FILE = 'servers/index.json'

Discord.prototype.getCommunities = async function getCommunities(options) {
  const data = await this.parser.parseAsJSON(COMMUNITIES_FILE, options?.parsingOptions)
  const communities: Array<Community> = Object.values(data).map((community_name: string): Community => ({
    name: community_name,
  }))
  return {
    data: communities,
    parsedFiles: [COMMUNITIES_FILE],
  }
}
