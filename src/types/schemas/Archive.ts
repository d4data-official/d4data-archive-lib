import Services from 'types/Services';

export default interface Archive {
  /**
   * Archive size in bytes
   */
  size?: number;

  /**
   * Archive creation date in timestamp format
   */
  creationDate?: Date;

  /**
   * Archive service name
   */
  service: Services;
}
