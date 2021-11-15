import Discord from '../Discord'
import { ChatMessage } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Discord.prototype.getChatMessages = withAutoParser(async (parser, chatId) => {
  const messages = await parser.findFiles(/messages.csv$/, './messages/')
  const { data: parsed } = await parser.parseAsCSV(messages?.[Number(chatId)])

  return parsed.map((chat): ChatMessage => ({
    sender: 'You',
    text: chat.Contents,
  }))
})
