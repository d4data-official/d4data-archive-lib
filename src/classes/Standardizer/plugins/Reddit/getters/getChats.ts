import Reddit from '../Reddit'
import { Chat } from '../../../../../types/schemas';

const CHATS_FILE = 'chat_history.csv'

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

Reddit.prototype.getChats = async function getChats(options) {
  const chatList = await this.parser.parseAsCSV<RedditChat>(CHATS_FILE, options?.parsingOptions)

  const chats: Array<Chat> = chatList.map((chat) => ({
    _id: chat.channel_url,
    title: chat.username,
    participants: [chat.username, 'You'],
  }))

  return {
    data: chats,
    parsedFiles: [CHATS_FILE],
  }
}
