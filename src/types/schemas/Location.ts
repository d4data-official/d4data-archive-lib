import { ISchema } from 'types/schemas/ISchema';

interface AbsolutePosition {
  /**
   *
   * Latitude of the absolute position
   *
   * @type {(number | string)}
   */
  latitude: number | string;

  /**
   *
   * Longitude of the absolute position
   *
   * @type {(number | string)}
   */
  longitude: number | string;
}

interface RelativePosition {
  /**
   *
   * Raw human-readable address
   *
   */
  raw: string

  /**
   *
   * City within human-readable address
   *
   */
  city?: string;

  /**
   *
   * Country within human-readable address
   *
   */
  country?: string;

  /**
   *
   * Address within human-readable address
   *
   */
  address?: string;

  /**
   *
   * Zip code within human-readable address
   *
   */
  zipcode?: string;
}

/**
 * Interface definition oflocation
 */
export interface Location extends ISchema {
  /**
   *
   * Position using latitude and longitude absolute coordinates
   *
   */
  absolutePosition?: AbsolutePosition;

  /**
   *
   * Human-readable address/city
   *
   */
  relativePosition?: RelativePosition;
}
