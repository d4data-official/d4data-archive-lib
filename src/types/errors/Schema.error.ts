import { ClassConstructor, plainToClass } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
// eslint-disable-next-line import/no-cycle
import { ASchema } from '../schemas/ASchema';

function parseError(error: ValidationError, nest: number = 1): string {
  const errorString = `${ ' '.repeat(nest * 4) }${ error.property }:\n${ error.children?.length
    ? error.children.map(child => parseError(child, nest + 1)).join('')
    : `${ ' '.repeat((nest + 1) * 4)
    }${ Object.values(error?.constraints || {}).map(key => `${ key }`) }\n`
  }`
  return errorString;
}

export class SchemaError extends Error {
  constructor(errors?: Array<ValidationError>) {
    super(errors?.map(err => parseError(err))?.join(''))
  }

  static constructAndCatch<V extends ASchema<V>>(constructor: ClassConstructor<V>, obj: V) {
    try {
      const constructedObj = plainToClass(constructor, obj)
      const valid = validateSync(
        constructedObj,
        { whitelist: true, forbidNonWhitelisted: true },
      );
      // console.log(valid.map());
      if (valid.length) {
        throw new SchemaError(valid)
      }
      return (constructedObj);
    } catch (e) {
      console
        .error(`Error on validation of ${ constructor.name }\n${ (e as SchemaError).message }`);
      return null;
    }
  }
}
