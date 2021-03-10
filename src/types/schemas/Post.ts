/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Event } from 'types/schemas/Event';
import { Location } from 'types/schemas/Location';
import { Media } from 'types/schemas/Media';
import { Reaction } from 'types/schemas/Reaction';

/**
 *
 *
 * @class ExternalContext
 * @extends {ASchema<ExternalContext>}
 */
class ExternalContext extends ASchema<ExternalContext> {
  /**
   *
   * link of an external site
   *
   * @type {string}
   * @memberof ExternalContext
   */
  @IsOptional()
  @IsString()
  @IsUrl()
  url?: string;
}

/**
 *
 * Class definition of post property
 *
 * @export
 * @class Post
 * @extends {ASchema<Post>}
 */
export class Post extends ASchema<Post> {
  /**
   *
   * Creation date of the post in timestamp format
   *
   * @type {(number | Date)}
   * @memberof Post
   */
  @IsDate()
  @Type(() => Date)
  creationDate!: number | Date;

  /**
   *
   * video or image linked with post
   *
   * @type {Array<Media>}
   * @memberof Post
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  medias?: Array<Media>;

  /**
   *
   * reaction linked with post
   *
   * @type {Array<Reaction>}
   * @memberof Post
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reaction)
  reactions?: Array<Reaction>;

  /**
   *
   * who posted
   *
   * @type {string}
   * @memberof Post
   */
  @IsString()
  sender!: string;

  /**
   *
   * pseudo of the sender for Twitter only
   *
   * @type {string}
   * @memberof Post
   */
  @IsOptional()
  @IsString()
  alias?: string;

  /**
   *
   * Title of the post
   *
   * @type {string}
   * @memberof Post
   */
  @IsOptional()
  @IsString()
  title?: string;

  /**
   *
   * message posted
   *
   * @type {string}
   * @memberof Post
   */
  @IsOptional()
  @IsString()
  content?: string;

  /**
   *
   * post with a location link
   *
   * @type {Location}
   * @memberof Post
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Location)
  location?: Location;

  /**
   *
   * post with a event link
   *
   * @type {Event}
   * @memberof Post
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Event)
  event?: Event;

  /**
   *
   * post with link of an external site
   *
   * @type {ExternalContext}
   * @memberof Post
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExternalContext)
  externalContext?: ExternalContext;

  /**
   *
   * list of person tag on the post
   *
   * @type {Array<string>}
   * @memberof Post
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: Array<string>;
}
