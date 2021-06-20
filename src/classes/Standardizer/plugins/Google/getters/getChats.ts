import Google from '../Google'
import { Chat } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const ACCOUNT_CHAT_FILE = 'Takeout/Hangouts/Hangouts.json'

Google.prototype.getChats = withAutoParser(async parser => {
  const rawChats = await parser.parseAsJSON(ACCOUNT_CHAT_FILE)

  const chats = rawChats.conversations.map((conv: any): Chat => ({
    _id: conv.conversation.conversation_id.id,
    participants: conv.conversation.conversation.participant_data
      .map((participant: any) => participant.fallback_name ?? 'Unknown participant'),
    title: 'Unknown chat',
  }))

  return { data: chats }
})
