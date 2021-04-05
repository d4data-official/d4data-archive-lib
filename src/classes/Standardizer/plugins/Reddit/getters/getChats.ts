import Reddit from '../Reddit'
import { Chat } from '../../../../../types/schemas';

const CHATS_FILE = 'chat_history.csv'

interface RedditChat {
  date: string,
  ip: string
}

Reddit.prototype.getChats = async function getChats(options) {
  const chatList = await this.parser.parseAsCSV<RedditChat>(CHATS_FILE, options?.parsingOptions)

  const chats: Array<Chat> = chatList.map((connection) => ({
    _id:
  }))

  return {
    data: chats,
    parsedFiles: [CHATS_FILE],
  }
}
