/**
 *
 *
 */
export interface Event {
/**
   *
   * name of the event
   *
   */
  name?: string;

  /**
   *
   * date and time of the start of the event in timestamp format
   *
   */
  startDate?: number | Date;

  /**
   *
   * date and time of the end of the event in timestamp format
   *
   */
  endDate?: number | Date;

  /**
   *
   * person who will participate to the event
   *
   */
  participants?: Array<string>
}
