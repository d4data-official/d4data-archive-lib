import Reaction from './Reaction'

export default interface ChatMessage {
  /**
   * The name of the sender
   */
  sender: string

  /**
   * The text sent by the sender
   */
  content?: string | undefined

  /**
   * URL of the meta data if any
   */
  metaData?: string | undefined

  /**
   * Message date
   */
  sendAt?: Date

  /**
   * reaction linked with message
   */
  reactions?: Array<Reaction> | undefined

  /**
   * contentType
   */
  type?: string
}
