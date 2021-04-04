import Facebook from '../Facebook'
import { Chat } from '../../../../../types/schemas';

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

Facebook.prototype.getChats = async function getChats(options) {
  const filesInbox = await this.parser.listFiles(MESSAGES_INBOX).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const filesArchive = await this.parser.listFiles(MESSAGES_ARCHIVE).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const files = filesInbox.concat(filesArchive)
  const chats = await Promise.all(files.map(
    (file, index) => this.parser.parseAsJSON<FBChats>(file, options?.parsingOptions).then((chat) => ({
      id: index.toString(),
      title: chat.title,
      participants: chat.participants.map((participant) => participant.name),
    } as Chat)),
  ))

  return {
    data: chats,
    parsedFiles: files,
  }
}
