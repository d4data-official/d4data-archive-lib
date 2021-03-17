import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofnotifications property
 *
 */
export interface Notification extends ISchema {
  /**
   *
   * text of the notification
   *
   */
  content?: string;

  /**
   *
   * date of the notification
   *
   * @type {(number | Date)}
   */
  notificationDate?: number | Date;

  /**
   *
   * link of the notification
   *
   */
  href?: string;
}
