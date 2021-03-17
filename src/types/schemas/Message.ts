import { ISchema } from 'types/schemas/ISchema';

/**
 * Interface definition ofa message
 */
export interface Message extends ISchema {
  /**
   *
   * creation date of the message in timestamp format
   *
   * @type {(number | Date)}
   */
  creationDate: number | Date;

  /**
   *
   * Who send the message
   *
   */
  sender: string

  /**
   *
   * Who receive the message
   *
   */
  receiver: string

  /**
   *
   * Subject of the message
   *
   */
  title?: string;

  /**
   *
   * Message content
   *
   */
  content: string
}
