import { Type } from 'class-transformer';
import { IsCurrency, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { ASchema } from './ASchema';

/**
 * JSON Schema definition of transaction property
 */
export class Transaction extends ASchema<Transaction> {
  /**
   * date of transaction (timestamp)
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: number;

  /**
   * description of transaction
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   * type of currency
   */
  @IsString()
  @IsCurrency()
  currency!: string;

  /**
   * positive/negative value of the transaction
   */
  @IsNumber()
  value!: number;

  /**
   * status of transaction (pending, done ...)
   */
  @IsOptional()
  @IsString()
  status?: string;

  /**
   * method used for payment
   */
  @IsOptional()
  @IsString()
  paymentMethod?: string;

  /**
   * product name
   */
  @IsString()
  product!: string;
}
