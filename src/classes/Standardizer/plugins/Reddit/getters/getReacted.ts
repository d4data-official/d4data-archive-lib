import { Reacted } from 'types/schemas'
import Reddit from '../Reddit'

Reddit.prototype.getReacted = async function getReacted(options) {
  const reactsPostRawData = await this.parser.parseAsCSV(
    'post_votes.csv',
    options?.parsingOptions,
  )
  const reactsCommentRawData = await this.parser.parseAsCSV(
    'comment_votes.csv',
    options?.parsingOptions,
  )
  const finalRawData = reactsPostRawData.concat(reactsCommentRawData)
  const reacteds = finalRawData.map((reaction):Reacted => ({
    type: 'post',
    entity: reaction.permalink,
  }))
  return {
    data: reacteds,
    parsedFiles: ['friends.csv'],
  }
}
