import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Community } from 'types/schemas/Community';
import { Contact } from 'types/schemas/Contact';
import { Discriminator } from 'types/Discriminator';

/**
 *
 * Following is an entity that a user can follow (user, page/community, ...)
 *
 * @export
 * @class Following
 * @extends {ASchema<Following>}
 */
export class Following extends ASchema<Following> {
  /**
   *
   * Either Community or Contact insrance
   *
   * @type {(Discriminator<Community, 'community'> | Discriminator<Contact, 'contact'>)}
   * @memberof Following
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ASchema, {
    discriminator: {
      property: '__type',
      subTypes: [
        { value: Community, name: typeof Community },
        { value: Contact, name: typeof Contact },
      ],
    },
  })
  entity?: |
  Discriminator<Community, 'community'>
  | Discriminator<Contact, 'contact'>
}
