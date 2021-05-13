import Facebook from '../Facebook'
import { Chat } from '../../../../../types/schemas'
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

Facebook.prototype.getChats = withAutoParser(async parser => {
  const filesInbox = await parser.listFiles(MESSAGES_INBOX).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const filesArchive = await parser.listFiles(MESSAGES_ARCHIVE).then(
    (paths) => paths.filter((path) => path.endsWith('message_1.json')),
  )
  const files = filesInbox.concat(filesArchive)

  return await Promise.all(
    files.map((file, index) => parser.parseAsJSON<FBChats>(file)
      .then((chat): Chat => ({
        _id: index.toString(),
        title: chat.title ?? 'Unknown name',
        participants: chat.participants.map((participant) => participant.name),
      }))),
  )
})
