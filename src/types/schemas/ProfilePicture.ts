import { Media } from 'types/schemas/Media';

export interface ProfilePicture {
  /**
     *
     * Index of current contact picture in history array
     *
     */
  currentPictureIndex?: number;

  /**
   *
   * History of contact picture
   *
   */
  history?: Array<Media>
}
