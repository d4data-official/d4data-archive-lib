/**
 * Interface of chat
 */
export default interface Chat {
    _id?: string | undefined;
    /**
     * The name of the conversation
     */
    title: string;
    /**
     * List of chat participants
     */
    participants: Array<string>;
}
