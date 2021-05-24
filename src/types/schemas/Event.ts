export default interface Event {
  /**
   * Service specific event type/name
   */
  type: string

  /**
   * Date time at the event occurred
   */
  date: Date

  /**
   * Target subject of the event extracted from the content if present
   */
  subject?: string

  /**
   * Optional raw data associated with the event, generally specific to the service
   */
  extra?: any
}
