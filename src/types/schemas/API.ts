import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ASchema } from 'types/schemas/ASchema';

/**
 */
/**
 *
 * Class definition of API property
 *
 * @export
 * @class API
 * @extends {ASchema<API>}
 */
export class API extends ASchema<API> {
  /**
   *
   * name of API
   *
   * @type {string}
   * @memberof API
   */
  @IsString()
  name!: string;

  /**
   *
   * date of API linking
   *
   * @type {(number | Date)}
   * @memberof API
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  linkingDate?: number | Date;
}
