import { ISchema } from 'types/schemas/ISchema';
import { Location } from 'types/schemas/Location';

/**
 *
 * Interface definition ofa connection
 *
 */
export interface Connection extends ISchema {
/**
   *
   * IP Address where the connection has been intiated
   *
   */
  ip_address: string

  /**
   *
   * Reference to location related to the IP
   *
   */
  location?: Location;

  /**
   *
   * Browser agent + computer name detected by service
   *
   */
  browser?: string;

  /**
   *
   * Timestamp of recorded connection
   *
   * @type {(number | Date)}
   */
  timestamp: number | Date;
}
