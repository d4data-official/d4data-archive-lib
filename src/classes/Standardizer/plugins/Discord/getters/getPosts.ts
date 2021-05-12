import Discord from '../Discord'
import { Chat, ChatMessage, Post } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser';

Discord.prototype.getPosts = withAutoParser(async (parser, options) => {
  const channels = await parser.findFiles(/channel.json$/, './messages/')
  const messages = await parser.findFiles(/messages.csv$/, './messages/')
  const offset = options?.parsingOptions?.pagination?.offset ?? 0
  const items = options?.parsingOptions?.pagination?.items ?? channels.length
  const findPosts = await Promise.all(channels.map(async (channel, id): Promise<Chat | undefined> => {
    const parsed = await parser.parseAsJSON(channel)
    if (parsed.type === 0) {
      const tmp = {
        title: parsed?.name ?? 'Private chat',
        _id: (id + offset).toString(),
        participants: [],
      }
      return tmp
    }
    return undefined
  }))
  const processPost = findPosts.filter(item => item !== undefined) as Array<Chat>
  const posts: Array<Post> = []
  for await (const findPost of processPost) {
    // eslint-disable-next-line no-underscore-dangle
    const id = findPost._id
    const parsed = await parser.parseAsCSV(messages?.[Number(id)])
    const chatMessages = parsed.map((chat): Post => ({
      sender: 'You',
      content: chat.Contents,
      creationDate: chat.Timestamp,
    }))
    for (const chatMessage of chatMessages) {
      posts.push(chatMessage)
      if (posts.length > items) {
        break
      }
    }
    if (posts.length > items) {
      break
    }
  }
  return posts.slice(offset, offset + items)
})
