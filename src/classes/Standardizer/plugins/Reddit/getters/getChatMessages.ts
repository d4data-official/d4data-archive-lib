import Reddit from '../Reddit'
import { ChatMessage } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

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

Reddit.prototype.getChatMessages = withAutoParser(async (parser, chatId) => {
  const rawChatMessages = await parser.parseAsCSV<RedditChat>(MESSAGES_FILE)

  const chatMessages = rawChatMessages.filter((message) => message.channel_url === chatId)
    .map((message): ChatMessage => ({
      sender: message.username,
      text: message.message,
      sendAt: new Date(message.created_at),
    }))

  return { data: chatMessages }
})
