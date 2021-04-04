/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from 'fs'
import path from 'path'
import {
  API,
  AuthorizedDevice,
  BrowserData,
  Chat,
  Community,
  Connection,
  Contact,
  Following,
  Mail,
  Media,
  Notification,
  Post,
  Reacted,
  Setting,
  Task,
  Transaction,
  Whereabout,
} from 'types/schemas'
import fsAsync from 'fs/promises'
import Services from '../../types/Services'
import Parser from '../Parser'
import { GetterOptions } from '../../types/standardizer/Standardizer'
import GetterReturn from '../../types/standardizer/GetterReturn'
import { MediaType } from '../../types/schemas/Media';

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

  async getProfile(options?: GetterOptions): GetterReturn<Contact> {
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

  async getComments(options?: GetterOptions): GetterReturn<Array<Post>> {
    return Promise.resolve(null)
  }

  async getPosts(options?: GetterOptions): GetterReturn<Array<Post>> {
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
      const extension: string = path.parse(file).ext.slice(1)
      return {
        url: `file:///${ file }`,
        type: <MediaType>Object.keys(formats).find((mediaType) => formats[<MediaType>mediaType].includes(extension)),
        size: (await fsAsync.stat(file)).size,
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

  async getTasks(options?: GetterOptions): GetterReturn<Array<Task>> {
    return Promise.resolve(null)
  }

  async getAuthorizedDevices(options?: GetterOptions): GetterReturn<Array<AuthorizedDevice>> {
    return Promise.resolve(null)
  }

  async getMail(options?: GetterOptions): GetterReturn<Array<Mail>> {
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
      .then(dirContent => dirContent.map(
        service => import(path.resolve(__dirname, PLUGINS_DIR, service, service))
          .then(importedModule => importedModule.default),
      ))
      .then(promiseArr => Promise.all(promiseArr))
  }

  /**
   * List all Standardizer plugins contained in the services sub-directory synchronously
   */
  static getPluginsSync(): Array<typeof Standardizer> {
    return fs.readdirSync(path.resolve(__dirname, PLUGINS_DIR)).map(
      // eslint-disable-next-line import/no-dynamic-require,global-require
      service => require(path.resolve(__dirname, PLUGINS_DIR, service, service)).default,
    )
  }

  /**
   * Import synchronously external getters from given directory.
   */
  static importExternalGettersSync(dirPath: string): void {
    const getterFiles = fs.readdirSync(dirPath)
      .filter(file => Standardizer.getters.includes(path.parse(file).name))

    // eslint-disable-next-line import/no-dynamic-require,global-require
    getterFiles.map(getterFile => require(path.resolve(dirPath, getterFile)))
  }
}
