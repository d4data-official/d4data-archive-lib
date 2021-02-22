/* eslint-disable no-restricted-syntax */
import { SchemaError } from '../src/types/errors/Schema.error';
import { Following } from '../src/types/schemas/Following';

console.log(SchemaError.constructAndCatch(Following, {
  entity: {
    __type: 'contact',
    name: 'string',
    mail: 'my@roro.co',
  },
}));
