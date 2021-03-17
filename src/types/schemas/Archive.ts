import Services from 'types/Services';
import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofarchives property
 *
 */
export interface Archive extends ISchema {
  /**
   *
   * Archive size in bytes
   *
   */
  size?: number;

  /**
   *
   * Archive creation date in timestamp format
   *
   * @type {(number | Date)}
   */
  creationDate?: number | Date;

  /**
   *
   * Archive service name
   *
   */
  service: Services;
}
