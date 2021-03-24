import Location from 'types/schemas/Location';

/**
 * Interface of
 */
export default interface Whereabout {
/**
   * Reference to location
   */
  location: Location;

  /**
   * Timestamp of recorded position
   */
  recordDate: Date;
}
