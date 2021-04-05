export default interface Event {
/**
   * name of the event
   */
  name?: string | undefined

  /**
   * date and time of the start of the event in timestamp format
   */
  startDate?: Date | undefined

  /**
   * date and time of the end of the event in timestamp format
   */
  endDate?: Date | undefined

  /**
   * person who will participate to the event
   */
  participants?: Array<string> | undefined
}
