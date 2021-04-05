import Reaction from './Reaction'

export default interface ChatMessage {
  /**
   * The name of the sender
   */
  sender: string

  /**
   * The text sent by the sender
   */
  text?: string;

  sendAt?: Date

  /**
   * reaction linked with message
   */
  reactions?: Array<Reaction>;
}
