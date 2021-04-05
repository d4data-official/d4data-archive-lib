import Facebook from '../Facebook'
import { Notification } from '../../../../../types/schemas'

const NOTIFICATIONS_FILE = 'about_you/notifications.json'

interface Notifications {
  notifications: Array<{
    text: string,
    timestamp: number,
    href: string,
    unread: boolean
  }>
}

Facebook.prototype.getNotifications = async function getNotifications(options) {
  const notificationList = await this.parser.parseAsJSON<Notifications>(NOTIFICATIONS_FILE, options?.parsingOptions)

  const notifications : Array<Notification> = notificationList.notifications.map((notification) => ({
    content: notification.text,
    timestamp: new Date(notification.timestamp * 1000),
    href: notification.href,
  }));

  return {
    data: notifications,
    parsedFiles: [NOTIFICATIONS_FILE],
  }
}
