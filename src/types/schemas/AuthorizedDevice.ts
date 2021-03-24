/**
 * Interface of authorized device
 */
export default interface AuthorizedDevice {
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
  authorizationDate?: Date;
}
