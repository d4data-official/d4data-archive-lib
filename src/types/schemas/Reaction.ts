import { ISchema } from 'types/schemas/ISchema';
import { Media } from 'types/schemas/Media';

/**
 *
 * Interface definition ofreaction property
 *
 */
export interface Reaction extends ISchema {
/**
   *
   * name of reaction
   *
   */
  name: string

  /**
   *
   * Use to give context or extra info to the reaction
   *
   */
  description?: string;

  /**
   *
   * Creation date time of the reaction (timestamp format)
   *
   * @type {(number | Date)}
   */
  reactionDate?: number | Date;

  /**
   *
   * Image associated to the reaction
   *
   */
  medias?: Array<Media>;
}
