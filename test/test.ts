/* eslint-disable no-restricted-syntax */
import { SchemaError } from '../src/types/errors/Schema.error';
import { API } from '../src/types/schemas/API';
import { Following } from '../src/types/schemas/Following';

/**
 *
 * @constructs API
 * @from a plain object
 * @returns {{null}} if the object is not validate
 *
 */
const api: API | null = SchemaError.constructAndCatch(API, {
  name: 'API Name',
  linkingDate: Date.now(),
});

console.log(api);

const apiBis: API = {
  name: 'API Name',

  // as linkingDate is optional, you do not have to define it
  linkingDate: Date.now(),
}

console.log(SchemaError.constructAndCatch(API, apiBis));

/**
 *
 * @constructs Following
 * @from a plain object
 * @returns {{null}} if the object is not validate
 *
 */
const following = SchemaError.constructAndCatch(Following, {
  entity: {
    /**
     * Will not be associated with the final object
     * __type is used as a discriminator for instance construction
     * entity can be of type Contact or Community and will be construc
     * depending on __type's value
     */
    __type: 'community',
    name: 'My community',

    /**
     * if defined displayName will cause an error during the type construction
     * @displayName is indeed not defined in Community type
     */
    displayName: 'Display Name',
  },
});

console.log(following);
