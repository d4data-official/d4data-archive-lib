import { ASchema } from '../ASchema';

/**
 * JSON Schema definition of Reddit not standardized data (extra data)
 */
export class Extra extends ASchema<Extra> {
  [k: string]: unknown;
}
