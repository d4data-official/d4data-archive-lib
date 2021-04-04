import Facebook from '../Facebook'
import { Comment } from '../../../../../types/schemas'

const COMMENTS_FILE = 'security_and_login_information/account_activity.json'

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

Facebook.prototype.getComments = async function getComments(options) {
  const commentList = await this.parser.parseAsJSON<FBComments>(COMMENTS_FILE, options?.parsingOptions)

  const comments : Array<Comment> = commentList.comments.map((comment) => {
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

  return {
    data: comments,
    parsedFiles: [COMMENTS_FILE],
  }
}
