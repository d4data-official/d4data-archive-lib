import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Discriminator } from 'types/Discriminator';
import { ASchema } from 'types/schemas/ASchema';
import { Community } from 'types/schemas/Community';
import { Media } from 'types/schemas/Media';
import { Post } from 'types/schemas/Post';
import { Reaction } from 'types/schemas/Reaction';

/**
 * Class definition of reacted content
 */
export class Reacted extends ASchema<Reacted> {
/**
   *
   * name of the entity's type
   *
   * @type {string}
   * @memberof Reacted
   */
  @IsString()
  type!: string;

  /**
   *
   *
   * @type {(Discriminator<Media, 'media'>
   *   | Discriminator<Post, 'post'>
   *   | Discriminator<Community, 'community>'>)}
   * @memberof Reacted
   */
  @ValidateNested()
  @Type(() => ASchema, {
    discriminator: {
      property: '__type',
      subTypes: [
        { value: Media, name: 'media' },
        { value: Post, name: 'post' },
        { value: Community, name: 'community' },
      ],
    },
  })
  entity!: |
  Discriminator<Media, 'media'>
  | Discriminator<Post, 'post'>
  | Discriminator<Community, 'community>'>

  /**
   *
   * Class definition of reaction property
   *
   * @type {Reaction}
   * @memberof Reacted
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reaction)
  reaction?: Reaction;
}
