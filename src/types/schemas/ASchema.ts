// import { validateSync } from 'class-validator';
// import { ClassConstructor, plainToClass } from 'class-transformer';
import 'reflect-metadata';
// eslint-disable-next-line import/no-cycle
// import { SchemaError } from '../errors/Schema.error';

export abstract class ASchema<T extends ASchema<T>> {
  public constructor(init: T) {
    Object.assign(this, init);
  }

  __type?: string;

  // public isAValid(type: ClassConstructor<T>): ASchema<T> {
  //   const valid = validateSync(plainToClass(type, this));
  //   // console.log(valid.map());
  //   if (valid.length) {
  //     throw new SchemaError(valid)
  //   }
  //   return (this);
  // }
}
