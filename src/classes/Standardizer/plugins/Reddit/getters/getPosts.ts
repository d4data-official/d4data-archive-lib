import Reddit from '../Reddit'
import { Comment, Post } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

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

Reddit.prototype.getPosts = withAutoParser(async parser => {
  const postList = await parser.parseAsCSV<RedditPost>(POSTS_FILE)

  return postList.map((post): Post => {
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
})
