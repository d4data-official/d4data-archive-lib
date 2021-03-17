/**
 * Interface of property
 */
export interface Notification {
  /**
   * text of the notification
   */
  content?: string;

  /**
   * date of the notification
   */
  notificationDate?: number | Date;

  /**
   * link of the notification
   */
  href?: string;
}
