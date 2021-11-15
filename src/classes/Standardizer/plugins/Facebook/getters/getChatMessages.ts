import Facebook from '../Facebook'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const MESSAGES_INBOX = 'messages/inbox'
const MESSAGES_ARCHIVE = 'messages/archived_threads'

interface FBChats {
  participants: Array<{
    name: string
  }>,
  messages: Array<{
    sender_name: string,
    timestamp_ms: number,
    content: string,
    type: string,
    users?: Array<{
      name: string
    }>,
    reactions?: Array<{
      reaction: string,
      actor: string
    }>,
  }>,
  title?: string,
  is_still_participant?: boolean,
  thread_type?: string,
  thread_path?: string
}

Facebook.prototype.getChatMessages = withAutoParser(async (parser, chatId) => {
  const filesInbox = await parser.listFiles(MESSAGES_INBOX).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const filesArchive = await parser.listFiles(MESSAGES_ARCHIVE).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const files = filesInbox.concat(filesArchive)
  const { data: messageList } = await parser.parseAsJSON<FBChats>(files[Number(chatId)])

  return messageList.messages.map((message) => ({
    sender: message.sender_name,
    text: message.content,
    sendAt: new Date(message.timestamp_ms),
    reactions: message.reactions?.map((reaction) => ({
      name: reaction.reaction,
    })),
  }))
})
