import Discord from '../Discord'
import { Chat } from '../../../../../types/schemas'

Discord.prototype.getChats = async function getChats(options) {
  const channels = await this.parser.findFiles(/channel.json$/, './messages/')
  const offset = options?.parsingOptions?.pagination?.offset ?? 0
  const items = options?.parsingOptions?.pagination?.items ?? channels.length
  const filteredChannels = channels.slice(offset, offset + items)
  const chats = filteredChannels.map(async (channel, id): Promise<Chat> => {
    const parsed = await this.parser.parseAsJSON(channel)
    return {
      title: parsed?.name ?? 'Private chat',
      _id: (id + offset).toString(),
      participants: [],
    }
  })
  return {
    data: await Promise.all(chats),
    parsedFiles: channels,
  }
}
