import { Type } from 'class-transformer';
import { IsDate, IsIP, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Location } from './Location';

/**
 * JSON Schema definition of a connection
 */
export class Connection extends ASchema<Connection> {
  /**
   * IP Address where the connection has been intiated
   */
  @IsString()
  @IsIP()
  ip_address!: string;

  /**
   * Reference to location related to the IP
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Location)
  location?: Location;

  /**
   * Browser agent + computer name detected by service
   */
  @IsOptional()
  @IsString()
  browser?: string;

  /**
   * Timestamp of recorded connection
   */
  @IsDate()
  @Type(() => Date)
  timestamp!: number | Date;
}
