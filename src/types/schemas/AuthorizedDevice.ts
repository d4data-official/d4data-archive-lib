/**
 * Interface of authorized device
 */
export interface AuthorizedDevice {
/**
   * name of device
   */
  name: string

  /**
   * ip of device
   */
  ip?: string;

  /**
   * date when the device was authorized
   */
  authorizationDate?: number | Date;
}
