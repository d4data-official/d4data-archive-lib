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
import Services from '../../types/Services'
import Parser from '../Parser'
import { GetterOptions } from '../../types/standardizer/Standardizer'
import GetterReturn from '../../types/standardizer/GetterReturn'

export const PLUGINS_DIR = 'plugins'

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
    return Promise.resolve(null)
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
}
