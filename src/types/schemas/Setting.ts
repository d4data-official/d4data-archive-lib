import { IsOptional, IsString } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

/**
 */
/**
 *
 * Class definition of setting property
 *
 * @export
 * @class Setting
 * @extends {ASchema<Setting>}
 */
export class Setting extends ASchema<Setting> {
/**
   *
   * name of setting
   *
   * @type {string}
   * @memberof Setting
   */
  @IsString()
  name!: string;

  /**
   *
   * value of setting
   *
   * @type {string}
   * @memberof Setting
   */
  @IsOptional()
  @IsString()
  value?: string;
}
