import { Type } from 'class-transformer';
import { IsCurrency, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

/**
 */
/**
 *
 * Class definition of transaction property
 *
 * @export
 * @class Transaction
 * @extends {ASchema<Transaction>}
 */
export class Transaction extends ASchema<Transaction> {
/**
   *
   * date of transaction (timestamp)
   *
   * @type {number}
   * @memberof Transaction
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: number;

  /**
   *
   * description of transaction
   *
   * @type {string}
   * @memberof Transaction
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   *
   * type of currency
   *
   * @type {string}
   * @memberof Transaction
   */
  @IsString()
  @IsCurrency()
  currency!: string;

  /**
   *
   * positive/negative value of the transaction
   *
   * @type {number}
   * @memberof Transaction
   */
  @IsNumber()
  value!: number;

  /**
   *
   * status of transaction (pending, done ...)
   *
   * @type {string}
   * @memberof Transaction
   */
  @IsOptional()
  @IsString()
  status?: string;

  /**
   *
   * method used for payment
   *
   * @type {string}
   * @memberof Transaction
   */
  @IsOptional()
  @IsString()
  paymentMethod?: string;

  /**
   *
   * product name
   *
   * @type {string}
   * @memberof Transaction
   */
  @IsString()
  product!: string;
}
