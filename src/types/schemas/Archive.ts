import Services from 'types/Services';

export default interface Archive {
  /**
   * Archive size in bytes
   */
  size?: number | undefined

  /**
   * Archive creation date in timestamp format
   */
  creationDate?: Date | undefined

  /**
   * Archive service name
   */
  service: Services
}
