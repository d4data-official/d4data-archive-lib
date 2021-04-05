import Google from '../Google'
import { Chat } from '../../../../../types/schemas'

const ACCOUNT_CHAT_FILE = 'Hangouts/Hangouts.json'

Google.prototype.getChats = async function getChats(options) {
  const rawChats = await this.parser.parseAsJSON(ACCOUNT_CHAT_FILE, options?.parsingOptions)
  const chatConversation : Array<Chat> = rawChats.conversations.map((conv: any) => ({
    id: conv.conversation.conversation_id,
    participants: conv.conversation.conversation.participant_data.map((participant: any) => participant.fallback_name),
    title: 'None',
  }))
  const chatEvent : Array<Chat> = rawChats.conversations.map((event: any) => ({
    id: event.conversation.conversation_id,
    participants: event.conversation.conversation.participant_data.map((participant: any) => participant.fallback_name),
    title: 'None',
  }))
  const chats = chatConversation.concat(chatEvent)
  return {
    data: chats,
    parsedFiles: [ACCOUNT_CHAT_FILE],
  }
}