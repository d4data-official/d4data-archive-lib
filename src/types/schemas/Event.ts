import { ISchema } from 'types/schemas/ISchema';

/**
 *
 *
 */
export interface Event extends ISchema {
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
   * @type {(number | Date)}
   */
  startDate?: number | Date;

  /**
   *
   * date and time of the end of the event in timestamp format
   *
   * @type {(number | Date)}
   */
  endDate?: number | Date;

  /**
   *
   * person who will participate to the event
   *
   */
  participants?: Array<string>
}
