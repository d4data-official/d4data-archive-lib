import Reaction from './Reaction';
export default interface ChatMessage {
    /**
     * The name of the sender
     */
    sender: string;
    /**
     * The text sent by the sender
     */
    text?: string | undefined;
    /**
     * URL of the meta data if any
     */
    metaData?: string | undefined;
    sendAt?: Date;
    /**
     * reaction linked with message
     */
    reactions?: Array<Reaction> | undefined;
}
