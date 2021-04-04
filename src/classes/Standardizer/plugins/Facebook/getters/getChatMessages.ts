import Facebook from '../Facebook'

const MESSAGES_INBOX = 'messages/inbox'
const MESSAGES_ARCHIVE = 'messages/inbox'

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

Facebook.prototype.getChatMessages = async function getChatMessages(chatId, options) {
  const filesInbox = await this.parser.listFiles(MESSAGES_INBOX).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const filesArchive = await this.parser.listFiles(MESSAGES_ARCHIVE).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const files = filesInbox.concat(filesArchive)
  const messageList = await this.parser.parseAsJSON<FBChats>(files[Number(chatId)], options?.parsingOptions)

  const messages = messageList.messages.map((message) => ({
    sender: message.sender_name,
    text: message.content,
    reactions: message.reactions?.map((reaction) => ({
      name: reaction.reaction,
    })),
  }))

  return {
    data: messages,
    parsedFiles: files,
  }
}
