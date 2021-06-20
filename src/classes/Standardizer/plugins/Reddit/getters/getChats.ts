import Reddit from '../Reddit'
import { Chat } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

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

Reddit.prototype.getChats = withAutoParser(async parser => {
  const rawChats = await parser.parseAsCSV<RedditChat>(CHATS_FILE)

  const chats = rawChats.map((chat): Chat => ({
    _id: chat.channel_url,
    title: chat.username,
    participants: [chat.username, 'You'],
  }))

  return { data: chats }
})
