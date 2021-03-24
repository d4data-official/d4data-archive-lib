export default interface Notification {
  /**
   * text of the notification
   */
  content?: string;

  /**
   * date of the notification
   */
  notificationDate?: Date;

  /**
   * link of the notification
   */
  href?: string;
}
