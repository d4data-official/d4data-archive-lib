import { ISchema } from 'types/schemas/ISchema';
import { Media } from 'types/schemas/Media';

export interface ProfilePicture extends ISchema {
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
