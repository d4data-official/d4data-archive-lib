/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import { IsLatitude, IsLongitude, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

class AbsolutePosition {
  /**
   *
   * Latitude of the absolute position
   *
   * @type {(number | string)}
   * @memberof AbsolutePosition
   */
  @IsLatitude()
  latitude!: number | string;

  /**
   *
   * Longitude of the absolute position
   *
   * @type {(number | string)}
   * @memberof AbsolutePosition
   */
  @IsLongitude()
  longitude!: number | string;
}

class RelativePosition {
  /**
   *
   * Raw human-readable address
   *
   * @type {string}
   * @memberof RelativePosition
   */
  @IsString()
  raw!: string;

  /**
   *
   * City within human-readable address
   *
   * @type {string}
   * @memberof RelativePosition
   */
  @IsOptional()
  @IsString()
  city?: string;

  /**
   *
   * Country within human-readable address
   *
   * @type {string}
   * @memberof RelativePosition
   */
  @IsOptional()
  @IsString()
  country?: string;

  /**
   *
   * Address within human-readable address
   *
   * @type {string}
   * @memberof RelativePosition
   */
  @IsOptional()
  @IsString()
  address?: string;

  /**
   *
   * Zip code within human-readable address
   *
   * @type {string}
   * @memberof RelativePosition
   */
  @IsOptional()
  @IsString()
  zipcode?: string;
}

/**
 * Class definition of location
 */
export class Location extends ASchema<Location> {
  /**
   *
   * Position using latitude and longitude absolute coordinates
   *
   * @type {AbsolutePosition}
   * @memberof Location
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AbsolutePosition)
  absolutePosition?: AbsolutePosition;

  /**
   *
   * Human-readable address/city
   *
   * @type {RelativePosition}
   * @memberof Location
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => RelativePosition)
  relativePosition?: RelativePosition;
}
