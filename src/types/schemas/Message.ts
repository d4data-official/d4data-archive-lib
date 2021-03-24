/**
 * Interface of message
 */
export default interface Message {
  /**
   * creation date of the message in timestamp format
   */
  creationDate: Date;

  /**
   * Who send the message
   */
  sender: string

  /**
   * Who receive the message
   */
  receiver: string

  /**
   * Subject of the message
   */
  title?: string;

  /**
   * Message content
   */
  content: string
}
