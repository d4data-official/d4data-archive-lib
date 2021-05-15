import Discord from '../Discord'
import { Chat } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Discord.prototype.getChats = withAutoParser(async (parser, options) => {
  const channels = await parser.findFiles(/channel.json$/, './messages/')
  const offset = options?.parsingOptions?.pagination?.offset ?? 0
  const items = options?.parsingOptions?.pagination?.items ?? channels.length
  const filteredChannels = channels.slice(offset, offset + items)

  return Promise.all(filteredChannels.map(async (channel, id): Promise<Chat> => {
    const parsed = await parser.parseAsJSON(channel)
    return {
      title: parsed?.name ?? 'Private chat',
      _id: (id + offset).toString(),
      participants: [],
    } as Chat
  }))
})
