import Media from 'types/schemas/Media';
import Post from 'types/schemas/Post';
import Community from 'types/schemas/Community';
import Reaction from 'types/schemas/Reaction';

export default interface Reacted {
/**
   * name of the entity's type
   */
  type: 'media' | 'post' | 'community';

  /**
   * entity
   */
  entity: Media | Post | Community;

  /**
   * Interface of property
   */
  reaction?: Reaction;
}
