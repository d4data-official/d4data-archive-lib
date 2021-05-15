import { Reacted } from 'types/schemas'
import Reddit from '../Reddit'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Reddit.prototype.getReacted = withAutoParser(async parser => {
  const reactsPostRawData = await parser.parseAsCSV('post_votes.csv')
  const reactsCommentRawData = await parser.parseAsCSV('comment_votes.csv')
  const finalRawData = reactsPostRawData.concat(reactsCommentRawData)
  return finalRawData.map((reaction):Reacted => ({
    entityType: 'externalLink',
    reaction: {
      name: reaction.direction,
    },
    entity: reaction.permalink,
  }))
})
