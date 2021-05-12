import Discord from '../Discord'
import { Chat, ChatMessage, Post } from '../../../../../types/schemas'

Discord.prototype.getPosts = async function getPosts(options) {
  const channels = await this.parser.findFiles(/channel.json$/, './messages/')
  const messages = await this.parser.findFiles(/messages.csv$/, './messages/')
  const offset = options?.parsingOptions?.pagination?.offset ?? 0
  const items = options?.parsingOptions?.pagination?.items ?? channels.length
  const filteredChannels = channels.slice(offset, offset + items)
  const filteredMessages = messages.slice(offset, offset + items)
  const findPosts = filteredChannels.map(async (channel, id): Promise<Chat> => {
    const parsed = await this.parser.parseAsJSON(channel)
    if (parsed.type === 0) {
      const tmp = {
        title: parsed?.name ?? 'Private chat',
        _id: (id + offset).toString(),
        participants: [],
      }
      return tmp
    }
    return {
      title: '',
      participants: [],
      _id: '',
    }
  })
  const posts: Array<Post> = []
  for await (const findPost of findPosts) {
    // eslint-disable-next-line no-underscore-dangle
    const id = findPost._id
    if (id !== '') {
      const parsed = await this.parser.parseAsCSV(filteredMessages?.[Number(id)])
      const chatMessages = parsed.map((chat): Post => ({
        sender: 'You',
        content: chat.Contents,
        creationDate: chat.Timestamp,
      }))
      for (const chatMessage of chatMessages) {
        posts.push(chatMessage)
      }
    }
  }
  return {
    data: await Promise.all(posts),
    parsedFiles: channels,
  }
}
