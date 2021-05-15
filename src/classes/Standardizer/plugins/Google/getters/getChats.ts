import Google from '../Google'
import { Chat } from '../../../../../types/schemas'

const ACCOUNT_CHAT_FILE = 'Takeout/Hangouts/Hangouts.json'

Google.prototype.getChats = async function getChats(options) {
  const rawChats = await this.parser.parseAsJSON(ACCOUNT_CHAT_FILE, options?.parsingOptions)
  const chats: Array<Chat> = await Promise.all(rawChats.conversations.map((conv: any): Chat => ({
    _id: conv.conversation.conversation_id.id,
    participants: conv.conversation.conversation.participant_data.map((participant: any) => participant.fallback_name),
    title: 'None',
  })))
  return {
    data: chats,
    parsedFiles: [ACCOUNT_CHAT_FILE],
  }
}
