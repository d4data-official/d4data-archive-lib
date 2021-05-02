import Media from 'types/schemas/Media';
export default interface Reaction {
    /**
     * name of reaction
     */
    name: string;
    /**
     * Use to give context or extra info to the reaction
     */
    description?: string | undefined;
    /**
     * Creation date time of the reaction (timestamp format)
     */
    reactionDate?: Date | undefined;
    /**
     * Image associated to the reaction
     */
    medias?: Array<Media> | undefined;
}
