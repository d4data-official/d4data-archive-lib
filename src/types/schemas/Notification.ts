export default interface Notification {
  /**
   * text of the notification
   */
  content?: string | undefined

  /**
   * date of the notification
   */
  notificationDate?: Date | undefined

  /**
   * link of the notification
   */
  href?: string | undefined
}
