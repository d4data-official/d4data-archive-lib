import { ISchema } from 'types/schemas/ISchema';
import { Media } from 'types/schemas/Media';

/**
 *
 * Interface definition ofmail property
 *
 */
export interface Mail extends ISchema {
  /**
   *
   * Sender of the mail
   *
   */
  from: string

  /**
   *
   * Receiver of the mail
   *
   */
  to: string

  /**
   *
   * Date at the time the mail was send
   *
   * @type {(number | Date)}
   */
  date: number | Date;

  /**
   *
   * Object of the mail
   *
   */
  subject?: string;

  /**
   *
   * content of the mail
   *
   */
  content: string

  /**
   *
   * info of the file link in the mail
   *
   */
  attachments?: Array<Media>;
}
