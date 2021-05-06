/* eslint-disable @typescript-eslint/no-unused-vars */

import fs, { promises as fsPromises } from 'fs'
import path from 'path'
import {
  API,
  AuthorizedDevice,
  BrowserData,
  Chat,
  ChatMessage,
  Comment,
  Community,
  Connection,
  Contact,
  Following,
  Mail,
  Media,
  Message,
  Notification,
  Post,
  Profile,
  Reacted,
  Setting,
  TaskList,
  Transaction,
  Whereabout,
} from 'types/schemas'
import { assertType, is } from 'typescript-is'
import Services from '../../types/Services'
import Parser from '../Parser'
import { GetterOptions } from '../../types/standardizer/Standardizer'
import GetterReturn from '../../types/standardizer/GetterReturn'
import { MediaType } from '../../types/schemas/Media'
import Getters from '../../types/standardizer/Getters'

export const PLUGINS_DIR = 'plugins'
export const EXTERNAL_GETTERS_DIR = 'getters'

export default abstract class Standardizer {
  path: string

  parser: Parser

  constructor(extractedArchivePath: string) {
    this.path = extractedArchivePath
    this.parser = new Parser(this.path)
  }

  /**
   * Get the Service type associated to this Standardizer
   */
  abstract get service(): Services

  /**
   * Get sub-service list of this standardizer service
   */
  abstract get subServices(): Array<Services>

  /**
   * Get sub-standardizer list of this standardizer service
   */
  abstract get subStandardizers(): Array<Standardizer>

  /**
   * Return cloned instance of Parser, must be use by getters to keep track of parsed files
   */
  newParser(): Parser {
    return this.parser.clone()
  }

  async getProfile(options?: GetterOptions): GetterReturn<Profile> {
    return Promise.resolve(null)
  }

  async getFriends(options?: GetterOptions): GetterReturn<Array<Contact>> {
    return Promise.resolve(null)
  }

  async getFollowings(options?: GetterOptions): GetterReturn<Array<Following>> {
    return Promise.resolve(null)
  }

  async getFollowers(options?: GetterOptions): GetterReturn<Array<Contact>> {
    return Promise.resolve(null)
  }

  async getContacts(options?: GetterOptions): GetterReturn<Array<Contact>> {
    return Promise.resolve(null)
  }

  async getWhereabouts(options?: GetterOptions): GetterReturn<Array<Whereabout>> {
    return Promise.resolve(null)
  }

  async getNotifications(options?: GetterOptions): GetterReturn<Array<Notification>> {
    return Promise.resolve(null)
  }

  async getChats(options?: GetterOptions): GetterReturn<Array<Chat>> {
    return Promise.resolve(null)
  }

  async getChatMessages(chatId: string, options?: GetterOptions): GetterReturn<Array<ChatMessage>> {
    return Promise.resolve(null)
  }

  async getComments(options?: GetterOptions): GetterReturn<Array<Comment>> {
    return Promise.resolve(null)
  }

  async getPosts(options?: GetterOptions): GetterReturn<Array<Post>> {
    return Promise.resolve(null)
  }

  async getMessages(options?: GetterOptions): GetterReturn<Array<Message>> {
    return Promise.resolve(null)
  }

  async getAPIs(options?: GetterOptions): GetterReturn<Array<API>> {
    return Promise.resolve(null)
  }

  async getConnections(options?: GetterOptions): GetterReturn<Array<Connection>> {
    return Promise.resolve(null)
  }

  async getCommunities(options?: GetterOptions): GetterReturn<Array<Community>> {
    return Promise.resolve(null)
  }

  async getSettings(options?: GetterOptions): GetterReturn<Array<Setting>> {
    return Promise.resolve(null)
  }

  async getReacted(options?: GetterOptions): GetterReturn<Array<Reacted>> {
    return Promise.resolve(null)
  }

  async getMedias(options?: GetterOptions): GetterReturn<Array<Media>> {
    const formats = {
      [MediaType.IMAGE]: ['png', 'jpg', 'jpeg', 'webp', 'ico', 'gif', 'bmp'],
      [MediaType.VIDEO]: ['mp4', 'avi', 'webm', 'mov', 'flv', 'mkv'],
      [MediaType.AUDIO]: ['ogg', 'mp3', 'aac', 'pcm'],
    }
    const allFormats: Array<string> = Object.values(formats).flat()
    const files = await this.parser.listFiles('.', { extensionWhitelist: allFormats })
    const medias = files.map(async (file): Promise<Media> => {
      const parsedPath = path.parse(file)
      const extension: string = parsedPath.ext.slice(1)
      return {
        url: `file:///${ file }`,
        type: <MediaType>Object.keys(formats).find((mediaType) => formats[<MediaType>mediaType].includes(extension)),
        size: (await fsPromises.stat(file)).size,
        fileName: parsedPath.base,
        fileExt: extension,
      }
    })
    return {
      data: await Promise.all(medias),
      parsedFiles: [],
    }
  }

  async getTransactions(options?: GetterOptions): GetterReturn<Array<Transaction>> {
    return Promise.resolve(null)
  }

  async getBrowserData(options?: GetterOptions): GetterReturn<BrowserData> {
    return Promise.resolve(null)
  }

  async getTasks(options?: GetterOptions): GetterReturn<Array<TaskList>> {
    return Promise.resolve(null)
  }

  async getAuthorizedDevices(options?: GetterOptions): GetterReturn<Array<AuthorizedDevice>> {
    return Promise.resolve(null)
  }

  async getMails(options?: GetterOptions): GetterReturn<Array<Mail>> {
    return Promise.resolve(null)
  }

  static get getters() {
    const excludedKeys = ['constructor']
    return Object.getOwnPropertyNames(Standardizer.prototype)
      .filter(propertyName => !excludedKeys.includes(propertyName) && propertyName.startsWith('get'))
  }

  /**
   * List all Standardizer plugins contained in the services sub-directory asynchronously
   */
  static getPlugins(): Promise<Array<typeof Standardizer>> {
    return fs.promises.readdir(path.resolve(__dirname, PLUGINS_DIR))
      .then(dirContent => dirContent
        .filter(file => Object.values<string>(Services).includes(path.parse(file).name))
        .map(
          service => import(path.resolve(__dirname, PLUGINS_DIR, service, service))
            .then(importedModule => importedModule.default),
        ))
      .then(promiseArr => Promise.all(promiseArr))
  }

  /**
   * List all Standardizer plugins contained in the services sub-directory synchronously
   */
  static getPluginsSync(): Array<typeof Standardizer> {
    return fs.readdirSync(path.resolve(__dirname, PLUGINS_DIR))
      .filter(file => Object.values<string>(Services).includes(path.parse(file).name))
      .map(
        // eslint-disable-next-line import/no-dynamic-require,global-require
        service => require(path.resolve(__dirname, PLUGINS_DIR, service, service)).default,
      )
  }

  /**
   * Import synchronously external getters from given directory.
   */
  static importExternalGettersSync(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      return
    }

    const getterFiles = fs.readdirSync(dirPath)
      .filter(file => Standardizer.getters.includes(path.parse(file).name))

    // eslint-disable-next-line import/no-dynamic-require,global-require
    getterFiles.map(getterFile => require(path.resolve(dirPath, getterFile)))
  }

  /**
   * Get validation function list to test returned data type of each getters.
   * Validation function return a boolean for valid/invalid data type.
   */
  static getterDataValidators(): Record<Getters, (data: any) => boolean> {
    return {
      getProfile: data => is<Profile>(data),
      getFriends: data => is<Array<Contact>>(data),
      getFollowings: data => is<Array<Following>>(data),
      getFollowers: data => is<Array<Contact>>(data),
      getContacts: data => is<Array<Contact>>(data),
      getWhereabouts: data => is<Array<Whereabout>>(data),
      getNotifications: data => is<Array<Notification>>(data),
      getChats: data => is<Array<Chat>>(data),
      getChatMessages: data => is<Array<ChatMessage>>(data),
      getComments: data => is<Array<Post>>(data),
      getPosts: data => is<Array<Post>>(data),
      getMessages: data => is<Array<Message>>(data),
      getAPIs: data => is<Array<API>>(data),
      getConnections: data => is<Array<Connection>>(data),
      getCommunities: data => is<Array<Community>>(data),
      getSettings: data => is<Array<Setting>>(data),
      getReacted: data => is<Array<Reacted>>(data),
      getMedias: data => is<Array<Media>>(data),
      getTransactions: data => is<Array<Transaction>>(data),
      getBrowserData: data => is<BrowserData>(data),
      getTasks: data => is<Array<TaskList>>(data),
      getAuthorizedDevices: data => is<Array<AuthorizedDevice>>(data),
      getMails: data => is<Array<Mail>>(data),
    }
  }

  /**
   * Get assertion function list to test returned data type of each getters.
   * Assertion function return the given data if valid else throw error with useful informations.
   */
  static getterDataAssertions(): Record<Getters, (data: any) => any> {
    return {
      getProfile: data => assertType<Profile>(data),
      getFriends: data => assertType<Array<Contact>>(data),
      getFollowings: data => assertType<Array<Following>>(data),
      getFollowers: data => assertType<Array<Contact>>(data),
      getContacts: data => assertType<Array<Contact>>(data),
      getWhereabouts: data => assertType<Array<Whereabout>>(data),
      getNotifications: data => assertType<Array<Notification>>(data),
      getChats: data => assertType<Array<Chat>>(data),
      getChatMessages: data => assertType<Array<ChatMessage>>(data),
      getComments: data => assertType<Array<Post>>(data),
      getPosts: data => assertType<Array<Post>>(data),
      getMessages: data => assertType<Array<Message>>(data),
      getAPIs: data => assertType<Array<API>>(data),
      getConnections: data => assertType<Array<Connection>>(data),
      getCommunities: data => assertType<Array<Community>>(data),
      getSettings: data => assertType<Array<Setting>>(data),
      getReacted: data => assertType<Array<Reacted>>(data),
      getMedias: data => assertType<Array<Media>>(data),
      getTransactions: data => assertType<Array<Transaction>>(data),
      getBrowserData: data => assertType<BrowserData>(data),
      getTasks: data => assertType<Array<TaskList>>(data),
      getAuthorizedDevices: data => assertType<Array<AuthorizedDevice>>(data),
      getMails: data => assertType<Array<Mail>>(data),
    }
  }
}
