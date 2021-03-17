enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
}

/**
 *
 * Interface definition ofmedia type
 *
 */
export interface Media {
  /**
   *
   * Absolute path on the host
   *
   */
  path: string

  /**
   *
   * Media size in bytes
   *
   */
  size: number

  /**
   *
   * Media type
   *
   */
  type: MediaType
}
