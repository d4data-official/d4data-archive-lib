import Reddit from '../Reddit'
import { Comment } from '../../../../../types/schemas';

const POSTS_FILE = 'posts.csv'

interface RedditPost {
  id: string,
  permalink?: string,
  date: string,
  ip?: string,
  subreddit?: string,
  gildings?: string,
  title?: string,
  url?: string,
  body?: string
}

Reddit.prototype.getPosts = async function getPosts(options) {
  const postList = await this.parser.parseAsCSV<RedditPost>(POSTS_FILE, options?.parsingOptions)

  const posts: Array<Comment> = postList.map((post) => {
    const links = post.url ? [post.url] : undefined
    const userTags = post.subreddit ? [post.subreddit] : undefined
    return {
      sender: 'You',
      content: post?.body,
      creationDate: new Date(post.date),
      metaData: {
        links,
        userTags,
      },
    }
  })

  return {
    data: posts,
    parsedFiles: [POSTS_FILE],
  }
}
