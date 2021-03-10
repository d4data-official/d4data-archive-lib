import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Media } from 'types/schemas/Media';

/**
 */
/**
 *
 * Class definition of reaction property
 *
 * @export
 * @class Reaction
 * @extends {ASchema<Reaction>}
 */
export class Reaction extends ASchema<Reaction> {
/**
   *
   * name of reaction
   *
   * @type {string}
   * @memberof Reaction
   */
  @IsString()
  name!: string;

  /**
   *
   * Use to give context or extra info to the reaction
   *
   * @type {string}
   * @memberof Reaction
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   *
   * Creation date time of the reaction (timestamp format)
   *
   * @type {(number | Date)}
   * @memberof Reaction
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  reactionDate?: number | Date;

  /**
   *
   * Image associated to the reaction
   *
   * @type {Array<Media>}
   * @memberof Reaction
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  medias?: Array<Media>;
}
