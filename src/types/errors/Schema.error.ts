import { ValidationError } from 'class-validator';
import 'reflect-metadata';

/**
 *
 *
 * @export
 * @class SchemaError
 * @extends {Error}
 */
export class SchemaError extends Error {
  /**
   * Creates an instance of SchemaError.
   * @param {Array<ValidationError>} [errors]
   * @memberof SchemaError
   */
  constructor(errors?: Array<ValidationError>) {
    super(errors?.map(err => err.toString()).join(''));
  }
}
