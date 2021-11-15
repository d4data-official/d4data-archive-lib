import Facebook from '../Facebook'
import { Community } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const COMMUNITIES_FILE = 'groups/your_group_membership_activity.json'

interface Communities {
  groups_joined: Array<{
    title: string,
    timestamp: number
  }>
}

Facebook.prototype.getCommunities = withAutoParser(async parser => {
  const { data: communityList } = await parser.parseAsJSON<Communities>(COMMUNITIES_FILE)

  return communityList.groups_joined.map((group): Community => ({
    joinedDate: new Date(group.timestamp * 1000),
    name: group.title,
  }))
})
