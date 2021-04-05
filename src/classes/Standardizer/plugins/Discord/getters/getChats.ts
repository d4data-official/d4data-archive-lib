import Discord from '../Discord'
import { Chat } from '../../../../../types/schemas'

Discord.prototype.getChats = async function getChats(options) {
  const channels = await this.parser.findFiles(/channel.json$/, './messages/')
  const chats = channels.map(async (channel, id): Promise<Chat> => {
    const parsed = await this.parser.parseAsJSON(channel)
    return {
      title: parsed?.name,
      _id: id.toString(),
      participants: [],
    }
  })
  return {
    data: await Promise.all(chats),
    parsedFiles: channels,
  }
}
