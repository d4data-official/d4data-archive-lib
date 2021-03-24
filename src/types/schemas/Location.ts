interface AbsolutePosition {
  /**
   * Latitude of the absolute position
   */
  latitude: number | string;

  /**
   * Longitude of the absolute position
   */
  longitude: number | string;
}

interface RelativePosition {
  /**
   * Raw human-readable address
   */
  raw: string

  /**
   * City within human-readable address
   */
  city?: string;

  /**
   * Country within human-readable address
   */
  country?: string;

  /**
   * Address within human-readable address
   */
  address?: string;

  /**
   * Zip code within human-readable address
   */
  zipcode?: string;
}

/**
 * Interface of
 */
export default interface Location {
  /**
   * Position using latitude and longitude absolute coordinates
   */
  absolutePosition?: AbsolutePosition;

  /**
   * Human-readable address/city
   */
  relativePosition?: RelativePosition;
}
