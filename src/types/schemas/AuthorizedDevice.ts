import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ASchema } from 'types/schemas/ASchema';

/**
 */
/**
 *
 * Class definition of an authorized device
 *
 * @export
 * @class AuthorizedDevice
 * @extends {ASchema<AuthorizedDevice>}
 */
export class AuthorizedDevice extends ASchema<AuthorizedDevice> {
/**
   *
   * name of device
   *
   * @type {string}
   * @memberof AuthorizedDevice
   */
  @IsString()
  name!: string;

  /**
   *
   * ip of device
   *
   * @type {string}
   * @memberof AuthorizedDevice
   */
  @IsOptional()
  @IsString()
  ip?: string;

  /**
   *
   * date when the device was authorized
   *
   * @type {(number | Date)}
   * @memberof AuthorizedDevice
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  authorizationDate?: number | Date;
}
