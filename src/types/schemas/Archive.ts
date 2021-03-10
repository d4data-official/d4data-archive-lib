import { IsDate, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { Services } from 'types/Services';
import { ASchema } from 'types/schemas/ASchema';

/**
 */
/**
 *
 * Class definition of archives property
 *
 * @export
 * @class Archive
 * @extends {ASchema<Archive>}
 */
export class Archive extends ASchema<Archive> {
  /**
   *
   * Archive size in bytes
   *
   * @type {number}
   * @memberof Archive
   */
  @IsOptional()
  @IsNumber()
  size?: number;

  /**
   *
   * Archive creation date in timestamp format
   *
   * @type {(number | Date)}
   * @memberof Archive
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  creationDate?: number | Date;

  /**
   *
   * Archive service name
   *
   * @type {Services}
   * @memberof Archive
   */
  @IsEnum(Services)
  service!: Services;
}
