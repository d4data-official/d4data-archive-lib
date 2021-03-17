import { Location } from 'types/schemas/Location';

/**
 *
 * Interface definition ofwhereabouts
 *
 */
export interface Whereabout {
/**
   *
   * Reference to location
   *
   */
  location: Location;

  /**
   *
   * Timestamp of recorded position
   *
   */
  recordDate: number | Date;
}
