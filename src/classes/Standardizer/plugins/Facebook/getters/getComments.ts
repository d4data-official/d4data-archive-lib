import Facebook from '../Facebook'
import { Comment } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const COMMENTS_FILE = 'comments/comments.json'

interface FBComments {
  comments: Array<{
    timestamp: number,
    title: string,
    data?: Array<{
      comment?: {
        timestamp?: number,
        comment?: string,
        author?: string,
      }
    }>,
    attachments?: Array<{
      data?: Array<{
        media?: {
          uri?: string,
          creation_timestamp?: number,
          title?: string
        }
      }>
    }>
  }>
}

Facebook.prototype.getComments = withAutoParser(async parser => {
  const rawComments = await parser.parseAsJSON<FBComments>(COMMENTS_FILE)

  const comments = rawComments.comments.map((comment): Comment => {
    const externalLink = comment?.attachments?.[0]?.data?.[0].media?.uri
    return {
      creationDate: new Date(comment.timestamp * 1000),
      title: comment?.title,
      sender: comment?.data?.[0].comment?.author || 'Myself',
      content: comment?.data?.[0].comment?.comment,
      metaData: {
        links: externalLink ? [externalLink] : undefined,
      },
    }
  })

  return { data: comments }
})
