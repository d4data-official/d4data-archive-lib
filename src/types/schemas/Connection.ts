import Location from 'types/schemas/Location';

/**
 * Interface of connection
 */
export default interface Connection {
/**
   * IP Address where the connection has been intiated
   */
  ipAddress: string

  /**
   * Reference to location related to the IP
   */
  location?: Location;

  /**
   * Browser agent + computer name detected by service
   */
  browser?: string;

  /**
   * Timestamp of recorded connection
   */
  timestamp: Date;
}
