import { ASchema } from '../ASchema';

/**
 * JSON Schema definition of Discord not standardized data (extra data)
 */
export class Extra extends ASchema<Extra> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'extraDiscord';

  [k: string]: unknown;
}
