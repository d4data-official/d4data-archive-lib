import { Reaction } from 'types/schemas/Reaction';

/**
 *
 * ChatMessage interface
 *
 */
interface ChatMessage {
  /**
     *
     * The name of the sender
     *
     */
  sender: string

  /**
   *
   * The text sent by the sender
   *
   */
  text?: string;

  /**
   *
   * URL of the meta data if any
   *
   */
  metaData?: string;

  /**
   *
   * reaction linked with message
   *
   */
  reactions?: Array<Reaction>;
}

/**
 *
 * Interface definition ofone chat
 *
 */
export interface Chat {
  /**
     *
     * List of chat participants
     *
     */
  participants: Array<string>

  /**
   *
   * List of messages
   *
   */
  conversation: Array<ChatMessage>

  /**
   *
   * The name of the conversation
   *
   */
  title: string
}
