import { GetterOptions } from '../../../../../types/standardizer/Standardizer';
import Discord from '../Discord';
import { ChatMessage } from '../../../../../types/schemas'

Discord.prototype.getChatMessages = async function getChatMessages(chatId: string, options?: GetterOptions) {
  const messages = await this.parser.findFiles(/messages.csv$/, './messages/')
  const parsed = await this.parser.parseAsCSV(messages?.[Number(chatId)], options?.parsingOptions)
  const chatMessages = parsed.map((chat): ChatMessage => ({
    sender: 'You',
    text: chat.Contents,
  }))
  return {
    data: chatMessages,
    parsedFiles: [messages?.[Number(chatId)]],
  }
}
