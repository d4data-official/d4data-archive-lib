import { API, AuthorizedDevice, BrowserData, Chat, ChatMessage, Comment, Community, Connection, Contact, Following, Mail, Media, Message, Notification, Post, Profile, Reacted, Setting, Task, Transaction, Whereabout } from 'types/schemas';
import Services from '../../types/Services';
import Parser from '../Parser';
import { GetterOptions } from '../../types/standardizer/Standardizer';
import GetterReturn from '../../types/standardizer/GetterReturn';
import Getters from '../../types/standardizer/Getters';
export declare const PLUGINS_DIR = "plugins";
export declare const EXTERNAL_GETTERS_DIR = "getters";
export default abstract class Standardizer {
    path: string;
    parser: Parser;
    constructor(extractedArchivePath: string);
    /**
     * Get the Service type associated to this Standardizer
     */
    abstract get service(): Services;
    /**
     * Get sub-service list of this standardizer service
     */
    abstract get subServices(): Array<Services>;
    /**
     * Get sub-standardizer list of this standardizer service
     */
    abstract get subStandardizers(): Array<Standardizer>;
    getProfile(options?: GetterOptions): GetterReturn<Profile>;
    getFriends(options?: GetterOptions): GetterReturn<Array<Contact>>;
    getFollowings(options?: GetterOptions): GetterReturn<Array<Following>>;
    getFollowers(options?: GetterOptions): GetterReturn<Array<Contact>>;
    getContacts(options?: GetterOptions): GetterReturn<Array<Contact>>;
    getWhereabouts(options?: GetterOptions): GetterReturn<Array<Whereabout>>;
    getNotifications(options?: GetterOptions): GetterReturn<Array<Notification>>;
    getChats(options?: GetterOptions): GetterReturn<Array<Chat>>;
    getChatMessages(chatId: string, options?: GetterOptions): GetterReturn<Array<ChatMessage>>;
    getComments(options?: GetterOptions): GetterReturn<Array<Comment>>;
    getPosts(options?: GetterOptions): GetterReturn<Array<Post>>;
    getMessages(options?: GetterOptions): GetterReturn<Array<Message>>;
    getAPIs(options?: GetterOptions): GetterReturn<Array<API>>;
    getConnections(options?: GetterOptions): GetterReturn<Array<Connection>>;
    getCommunities(options?: GetterOptions): GetterReturn<Array<Community>>;
    getSettings(options?: GetterOptions): GetterReturn<Array<Setting>>;
    getReacted(options?: GetterOptions): GetterReturn<Array<Reacted>>;
    getMedias(options?: GetterOptions): GetterReturn<Array<Media>>;
    getTransactions(options?: GetterOptions): GetterReturn<Array<Transaction>>;
    getBrowserData(options?: GetterOptions): GetterReturn<BrowserData>;
    getTasks(options?: GetterOptions): GetterReturn<Array<Task>>;
    getAuthorizedDevices(options?: GetterOptions): GetterReturn<Array<AuthorizedDevice>>;
    getMails(options?: GetterOptions): GetterReturn<Array<Mail>>;
    static get getters(): string[];
    /**
     * List all Standardizer plugins contained in the services sub-directory asynchronously
     */
    static getPlugins(): Promise<Array<typeof Standardizer>>;
    /**
     * List all Standardizer plugins contained in the services sub-directory synchronously
     */
    static getPluginsSync(): Array<typeof Standardizer>;
    /**
     * Import synchronously external getters from given directory.
     */
    static importExternalGettersSync(dirPath: string): void;
    /**
     * Get validation function list to test returned data type of each getters.
     * Validation function return a boolean for valid/invalid data type.
     */
    static getterDataValidators(): Record<Getters, (data: any) => boolean>;
    /**
     * Get assertion function list to test returned data type of each getters.
     * Assertion function return the given data if valid else throw error with useful informations.
     */
    static getterDataAssertions(): Record<Getters, (data: any) => any>;
}
