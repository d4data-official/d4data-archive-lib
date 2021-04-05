import Facebook from '../Facebook'
import { Community, Reacted } from '../../../../../types/schemas'

const LIKED_PAGES_FILE = 'likes_and_reactions/pages.json'
const LIKED_POSTS_FILE = 'likes_and_reactions/posts_and_comments.json'

interface PagesLiked {
  page_likes: Array<{
    name: string,
    timestamp: number
  }>
}

interface PostsLiked {
  reactions: Array<{
    title: string,
    timestamp: number,
    data: Array<{
      reaction: {
        reaction: string,
        actor: string
      }
    }>
  }>
}

Facebook.prototype.getReacted = async function getReacted(options) {
  const likedPageList = await this.parser.parseAsJSON<PagesLiked>(LIKED_PAGES_FILE, options?.parsingOptions)
  const likedPostList = await this.parser.parseAsJSON<PostsLiked>(LIKED_POSTS_FILE, options?.parsingOptions)

  const likedPages : Array<Reacted> = likedPageList.page_likes.map((like) => ({
    type: 'community',
    entity: {
      name: like.name,
    } as Community,
    reaction: {
      name: 'like',
      reactionDate: new Date(like.timestamp * 1000),
    },
  }));

  const likedPosts : Array<Reacted> = likedPostList.reactions.map((reaction) => ({
    type: 'post',
    entity: {
      name: reaction.title,
    } as Community,
    reaction: {
      name: reaction.data[0].reaction.reaction,
      description: reaction.title,
      reactionDate: new Date(reaction.timestamp * 1000),
    },
  }));

  const reacted = likedPages.concat(likedPosts)

  return {
    data: reacted,
    parsedFiles: [LIKED_PAGES_FILE, LIKED_POSTS_FILE],
  }
}
