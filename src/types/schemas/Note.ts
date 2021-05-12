export default interface Note {
  /**
   * creation date of the message in timestamp format
   */
  creationDate: Date

  /**
   * Subject of the message
   */
  title?: string | undefined

  /**
   * Message content
   */
  content: string
}
