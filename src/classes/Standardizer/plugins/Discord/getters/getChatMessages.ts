import Discord from '../Discord'
import { ChatMessage } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

Discord.prototype.getChatMessages = withAutoParser(async (parser, chatId) => {
  const messageFiles = await parser.findFiles(/messages.csv$/, './messages/')
  const rawMessages = await parser.parseAsCSV(messageFiles?.[Number(chatId)])
  const messages = rawMessages.map((chat): ChatMessage => ({
    sender: 'You',
    text: chat.Contents,
  }))

  return { data: messages }
})
