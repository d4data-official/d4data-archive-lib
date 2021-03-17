import { Discriminator } from 'types/Discriminator';
import { Media } from 'types/schemas/Media';
import { Post } from 'types/schemas/Post';
import { Community } from 'types/schemas/Community';
import { Reaction } from 'types/schemas/Reaction';

/**
 * Interface definition ofreacted content
 */
export interface Reacted {
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
