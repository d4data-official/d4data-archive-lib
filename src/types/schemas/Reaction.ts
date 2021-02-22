import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Media } from './Media';

/**
 * JSON Schema definition of reaction property
 */
export class Reaction extends ASchema<Reaction> {
  /**
   * name of reaction
   */
  @IsString()
  name!: string;

  /**
   * Use to give context or extra info to the reaction
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   * Creation date time of the reaction (timestamp format)
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  reactionDate?: number | Date;

  /**
   * Image associated to the reaction
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  medias?: Array<Media>;
}
