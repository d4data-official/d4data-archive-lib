import { Type } from 'class-transformer';
import { IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Community } from './Community';
import { Contact } from './Contact';

enum FollowingType {
  COMMUNITY = 'community',
  CONTACTS = 'contacts',
}

/**
 * Following is an entity that a user can follow (user, page/community, ...)
 */
export class Following extends ASchema<Following> {
  /**
   * name of the entity's type
   */
  @IsOptional()
  @IsEnum(FollowingType)
  type?: FollowingType;

  /**
   * Either Community or Contact object depending on type value
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ASchema, {
    discriminator: {
      property: '__type',
      subTypes: [
        { value: Community, name: 'community' },
        { value: Contact, name: 'contact' },
      ],
    },
  })
  entity?: Community | Contact
}
