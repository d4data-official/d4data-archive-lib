import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import 'reflect-metadata';
import { SchemaError } from '../errors/Schema.error'

/**
 *
 *
 * @export
 * @abstract
 * @class ASchema
 * @template T
 */
export abstract class ASchema<T extends ASchema<T>> {
  public constructor(init: T) {
    Object.assign(this, init);
  }

  /**
   *
   *
   * @static
   * @template V
   * @param {ClassConstructor<V>} constructor
   * @param {V} obj
   * @return {V}
   * @memberof ASchema
   */
  static construct<V extends ASchema<V>>(constructor: ClassConstructor<V>, obj: V): V {
    const constructedObj = plainToClass(constructor, obj)
    const errors = validateSync(
      constructedObj,
      { whitelist: true, forbidNonWhitelisted: true },
    );
    if (errors.length) {
      throw new SchemaError(errors)
    }
    return (constructedObj);
  }
}
