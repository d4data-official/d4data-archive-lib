import Facebook from '../Facebook'
import { Post } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_ACTIVITY_FILE = 'posts/your_posts_1.json'

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

Facebook.prototype.getPosts = withAutoParser(async parser => {
  const postList = await parser.parseAsJSON<Array<FBPost>>(ACCOUNT_ACTIVITY_FILE)

  const posts: Array<Post> = postList.map((post) => {
    const externalLink = post?.attachments?.[0]?.data?.[0].external_context?.url
    return {
      creationDate: new Date(post.timestamp * 1000),
      title: post?.title,
      sender: 'Myself',
      content: post?.data?.[0]?.post,
      metaData: {
        links: externalLink ? [externalLink] : undefined,
      },
    }
  })

  return posts
})
