import { Type } from 'class-transformer';
import { IsDate, IsIP, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Location } from 'types/schemas/Location';

/**
 */
/**
 *
 * Class definition of a connection
 *
 * @export
 * @class Connection
 * @extends {ASchema<Connection>}
 */
export class Connection extends ASchema<Connection> {
/**
   *
   * IP Address where the connection has been intiated
   *
   * @type {string}
   * @memberof Connection
   */
  @IsString()
  @IsIP()
  ip_address!: string;

  /**
   *
   * Reference to location related to the IP
   *
   * @type {Location}
   * @memberof Connection
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Location)
  location?: Location;

  /**
   *
   * Browser agent + computer name detected by service
   *
   * @type {string}
   * @memberof Connection
   */
  @IsOptional()
  @IsString()
  browser?: string;

  /**
   *
   * Timestamp of recorded connection
   *
   * @type {(number | Date)}
   * @memberof Connection
   */
  @IsDate()
  @Type(() => Date)
  timestamp!: number | Date;
}
