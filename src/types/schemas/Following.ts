import Community from 'types/schemas/Community';
import Contact from 'types/schemas/Contact';

export default interface Following {

  /**
   * Type name of the entity
   */
  type: 'contact' | 'community'

  /**
   * Either Community or Contact instance
   */
  entity: Community | Contact

  /**
   * Following since date (optional)
   */
  followedSince?: Date | undefined
}
