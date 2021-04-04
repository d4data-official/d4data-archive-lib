import Media from 'types/schemas/Media'
import Post from 'types/schemas/Post'
import Community from 'types/schemas/Community'
import Reaction from 'types/schemas/Reaction'

export default interface Reacted {
  /**
   * name of the entity's type
   */
  type: 'media' | 'post' | 'community' | 'externalLink'

  /**
   * entity
   */
  entity: Media | Post | Community | string

  /**
   * Interface of property
   */
  reaction?: Reaction | undefined
}
