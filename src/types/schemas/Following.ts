import { Community } from 'types/schemas/Community';
import { Contact } from 'types/schemas/Contact';

/**
 * Following is an entity that a user can follow (user, page/community, ...)
 */
export interface Following {

  /**
   * Type name of the entity
   */
  type: 'contact' | 'community'

  /**
   * Either Community or Contact instance
   */
  entity: Community | Contact
}
