import { ASchema } from 'types/schemas/ASchema';

/**
 *
 * Class definition of Facebook not standardized data (extra data)
 *
 * @export
 * @class Extra
 * @extends {ASchema<Extra>}
 */
export class Extra extends ASchema<Extra> {
  [k: string]: unknown;
}
