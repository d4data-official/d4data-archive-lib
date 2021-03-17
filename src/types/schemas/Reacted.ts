import { Discriminator } from 'types/Discriminator';
import { ISchema } from 'types/schemas/ISchema';
import { Media } from 'types/schemas/Media';
import { Post } from 'types/schemas/Post';
import { Community } from 'types/schemas/Community';
import { Reaction } from 'types/schemas/Reaction';

/**
 * Interface definition ofreacted content
 */
export interface Reacted extends ISchema {
/**
   *
   * name of the entity's type
   *
   */
  type: string

  /**
   *
   * entity
   *
   */
  entity: |
  Discriminator<Media, 'media'>
  | Discriminator<Post, 'post'>
  | Discriminator<Community, 'community>'>

  /**
   *
   * Interface definition ofreaction property
   *
   */
  reaction?: Reaction;
}
