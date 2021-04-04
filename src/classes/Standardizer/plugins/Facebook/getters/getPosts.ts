import Facebook from '../Facebook'
import { Post } from '../../../../../types/schemas'

const ACCOUNT_ACTIVITY_FILE = 'security_and_login_information/account_activity.json'

interface FBPost {
  timestamp: number,
  data?: Array<{
    post?: string,
    update_timestamp?: number
  }>,
  attachments?: Array<{
    data?: Array<{
      media?: {
        uri?: string,
        creation_timestamp?: number,
        title?: string
      }
      external_context?: {
        name?: string
        url?: string
      }
    }>
  }>
  title: string
}

Facebook.prototype.getPosts = async function getPosts(options) {
  const postList = await this.parser.parseAsJSON<Array<FBPost>>(ACCOUNT_ACTIVITY_FILE, options?.parsingOptions)

  const posts : Array<Post> = postList.map((post) => {
    const externalLink = post?.attachments?.[0]?.data?.[0].external_context?.url
    return {
      creationDate: new Date(post.timestamp * 1000),
      title: post?.title,
      sender: 'Myself',
      content: post?.data?.[0].post,
      metaData: {
        links: externalLink ? [externalLink] : undefined,
      },
    }
  })

  return {
    data: posts,
    parsedFiles: [ACCOUNT_ACTIVITY_FILE],
  }
}
