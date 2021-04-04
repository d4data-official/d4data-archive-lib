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
   * Media size in bytes
   */
  size?: number

  /**
   * Media type
   */
  type?: MediaType
}
