import Reddit from '../Reddit'
import { ChatMessage } from '../../../../../types/schemas';

const MESSAGES_FILE = 'chat_history.csv'

interface RedditChat {
  message_id: number,
  created_at: string,
  username: string,
  message: string,
  channel_url: string,
  subreddit?: string,
  channel_name?: string,
  conversation_type: string,
}

Reddit.prototype.getChatMessages = async function getChatMessages(chatId, options) {
  const messageList = await this.parser.parseAsCSV<RedditChat>(MESSAGES_FILE, options?.parsingOptions)

  const messages: Array<ChatMessage> = messageList
    .filter((message) => message.channel_url === chatId)
    .map((message) => ({
      sender: message.username,
      text: message.message,
      sendAt: new Date(message.created_at),
    }))

  return {
    data: messages,
    parsedFiles: [MESSAGES_FILE],
  }
}
