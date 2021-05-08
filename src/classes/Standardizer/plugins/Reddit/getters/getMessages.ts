import Reddit from '../Reddit'
import { Message } from '../../../../../types/schemas';

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

Reddit.prototype.getMessages = async function getMessages(options) {
  const messageList = await this.parser.parseAsCSV<RedditMessage>(MESSAGES_FILE, options?.parsingOptions)

  const messages: Array<Message> = messageList.map((message) => ({
    creationDate: new Date(message.date),
    sender: message.from,
    receiver: message.to,
    title: message.subject,
    content: message.body,
  }))

  return {
    data: messages,
    parsedFiles: [MESSAGES_FILE],
  }
}
