import Facebook from '../Facebook'
import { Community } from '../../../../../types/schemas'

const COMMUNITIES_FILE = 'groups/your_group_membership_activity.json'

interface Communities {
  groups_joined: Array<{
    title: string,
    timestamp: number
  }>
}

Facebook.prototype.getCommunities = async function getCommunities(options) {
  const communityList = await this.parser.parseAsJSON<Communities>(COMMUNITIES_FILE, options?.parsingOptions)

  const communities : Array<Community> = communityList.groups_joined.map((group) => ({
    joinedDate: new Date(group.timestamp * 1000),
    name: group.title,
  }))

  return {
    data: communities,
    parsedFiles: [COMMUNITIES_FILE],
  }
}
