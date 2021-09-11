import Reddit from '../Reddit'
import { Message } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const MESSAGES_FILE = 'messages.csv'

interface RedditMessage {
  id: number,
  permalink: string,
  thread_id: string,
  date: string,
  ip?: string,
  from: string,
  to: string,
  subject?: string,
  body: string,
}

Reddit.prototype.getMessages = withAutoParser(async parser => {
  const { data: messageList } = await parser.parseAsCSV<RedditMessage>(MESSAGES_FILE)

  return messageList.map((message): Message => ({
    creationDate: new Date(message.date),
    sender: message.from,
    receiver: message.to,
    title: message.subject,
    content: message.body,
  }))
})
