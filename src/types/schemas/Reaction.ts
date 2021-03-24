import Media from 'types/schemas/Media';

/**
 * Interface of property
 */
export default interface Reaction {
/**
   * name of reaction
   */
  name: string

  /**
   * Use to give context or extra info to the reaction
   */
  description?: string;

  /**
   * Creation date time of the reaction (timestamp format)
   */
  reactionDate?: Date;

  /**
   * Image associated to the reaction
   */
  medias?: Array<Media>;
}
