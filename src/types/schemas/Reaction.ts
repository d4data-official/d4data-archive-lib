import { Media } from 'types/schemas/Media';

/**
 *
 * Interface definition ofreaction property
 *
 */
export interface Reaction {
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
   */
  reactionDate?: number | Date;

  /**
   *
   * Image associated to the reaction
   *
   */
  medias?: Array<Media>;
}
