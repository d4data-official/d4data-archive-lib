import { ISchema } from 'types/schemas/ISchema';

/**
 *
 * Interface definition oftransaction property
 *
 */
export interface Transaction extends ISchema {
/**
   *
   * date of transaction (timestamp)
   *
   */
  date?: number;

  /**
   *
   * description of transaction
   *
   */
  description?: string;

  /**
   *
   * type of currency
   *
   */
  currency: string

  /**
   *
   * positive/negative value of the transaction
   *
   */
  value: number

  /**
   *
   * status of transaction (pending, done ...)
   *
   */
  status?: string;

  /**
   *
   * method used for payment
   *
   */
  paymentMethod?: string;

  /**
   *
   * product name
   *
   */
  product: string
}
