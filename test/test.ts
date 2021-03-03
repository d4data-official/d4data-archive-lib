/* eslint-disable no-restricted-syntax */

import { Following } from '../src/types/schemas/Following';
import { Community } from '../src/types/schemas/Community';

const f: Following = {
  entity: {
    __type: Community,
    name: 'string',
  },
}
console.log(f);
