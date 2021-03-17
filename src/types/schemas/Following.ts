import { ISchema } from 'types/schemas/ISchema';
import { Community } from 'types/schemas/Community';
import { Contact } from 'types/schemas/Contact';
import { Discriminator } from 'types/Discriminator';

/**
 *
 * Following is an entity that a user can follow (user, page/community, ...)
 *
 */
export interface Following extends ISchema {
  /**
   *
   * Either Community or Contact insrance
   *
   */
  entity?: |
  Discriminator<Community, 'community'>
  | Discriminator<Contact, 'contact'>
}
