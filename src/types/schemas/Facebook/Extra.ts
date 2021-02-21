import { ASchema } from '../ASchema';

/**
 * JSON Schema definition of Facebook not standardized data (extra data)
 */
export class Extra extends ASchema<Extra> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'extraFacebook';

  [k: string]: unknown;
}
