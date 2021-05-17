import Reddit from '../Reddit'
import { Comment } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const COMMENTS_FILE = 'comments.csv'

interface RedditComment {
  id: string,
  permalink?: string,
  date: string,
  ip_address?: string,
  subreddit?: string,
  gildings?: string,
  link?: string,
  parent?: string,
  body?: string
}

Reddit.prototype.getComments = withAutoParser(async parser => {
  const commentList = await parser.parseAsCSV<RedditComment>(COMMENTS_FILE)

  return commentList.map((comment) :Comment => ({
    sender: 'You',
    content: comment?.body,
    creationDate: new Date(comment.date),
    externalLink: comment.link,
  }))
})
