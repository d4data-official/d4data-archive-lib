export enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
}

export default interface Media {
  /**
   * URL to the media
   * For local media use the file protocol in the URL (file:///path/to/media)
   */
  url: string

  /**
   * File name if known
   */
  fileName?: string | undefined

  /**
   * File extension if known
   */
  fileExt?: string | undefined

  /**
   * Media size in bytes
   */
  size?: number | undefined

  /**
   * Media type
   */
  type: MediaType
}
