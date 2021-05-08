import Services from 'types/Services';

export default interface ArchiveMetaData {
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
