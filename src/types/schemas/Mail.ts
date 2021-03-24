import Media from 'types/schemas/Media';

export default interface Mail {
  /**
   * Sender of the mail
   */
  from: string

  /**
   * Receiver of the mail
   */
  to: string

  /**
   * Date at the time the mail was send
   */
  date: Date;

  /**
   * Object of the mail
   */
  subject?: string;

  /**
   * content of the mail
   */
  content: string

  /**
   * info of the file link in the mail
   */
  attachments?: Array<Media>;
}
