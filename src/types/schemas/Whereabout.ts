import { ISchema } from 'types/schemas/ISchema';
import { Location } from 'types/schemas/Location';

/**
 *
 * Interface definition ofwhereabouts
 *
 */
export interface Whereabout extends ISchema {
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
