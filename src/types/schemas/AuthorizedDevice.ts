import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition ofan authorized device
 *
 */
export interface AuthorizedDevice extends ISchema {
/**
   *
   * name of device
   *
   */
  name: string

  /**
   *
   * ip of device
   *
   */
  ip?: string;

  /**
   *
   * date when the device was authorized
   *
   * @type {(number | Date)}
   */
  authorizationDate?: number | Date;
}
