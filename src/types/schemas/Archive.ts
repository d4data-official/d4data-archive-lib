import Services from 'types/Services';
/**
 * Interface of property
 */
export interface Archive {
  /**
   * Archive size in bytes
   */
  size?: number;

  /**
   * Archive creation date in timestamp format
   */
  creationDate?: number | Date;

  /**
   * Archive service name
   */
  service: Services;
}
