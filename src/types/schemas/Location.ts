/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import { IsLatitude, IsLongitude, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';

class AbsolutePosition {
  /**
   * Latitude of the absolute position
   */
  @IsLatitude()
  latitude!: number | string;

  /**
   * Longitude of the absolute position
   */
  @IsLongitude()
  longitude!: number | string;
}

class RelativePosition {
  /**
   * Raw human-readable address
   */
  @IsString()
  raw!: string;

  /**
   * City within human-readable address
   */
  @IsOptional()
  @IsString()
  city?: string;

  /**
   * Country within human-readable address
   */
  @IsOptional()
  @IsString()
  country?: string;

  /**
   * Address within human-readable address
   */
  @IsOptional()
  @IsString()
  address?: string;

  /**
   * Zip code within human-readable address
   */
  @IsOptional()
  @IsString()
  zipcode?: string;
}

/**
 * JSON Schema definition of location
 */
export class Location extends ASchema<Location> {
  /**
   * Position using latitude and longitude absolute coordinates
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AbsolutePosition)
  absolutePosition?: AbsolutePosition;

  /**
   * Human-readable address/city
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => RelativePosition)
  relativePosition?: RelativePosition;
}
