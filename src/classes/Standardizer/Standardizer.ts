/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from 'fs'
import path from 'path'
import { Services } from '../../types/Services'
import Parser from '../Parser'
import { PaginationOptions, ParsingOptions } from '../../types/Parsing'

export interface GetterOptions {
  parsingOptions?: ParsingOptions & PaginationOptions
}

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

  async getProfile(options?: GetterOptions): Promise<object | null> {
    return Promise.resolve(null)
  }

  async getFriends(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getFollowings(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getFollowers(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getContacts(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getWhereabouts(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getNotifications(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getChats(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getComments(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getPosts(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getAPIs(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getConnections(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getCommunities(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getSettings(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getReacted(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getMedias(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getTransactions(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getBrowserData(options?: GetterOptions): Promise<object | null> {
    return Promise.resolve(null)
  }

  async getTasks(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getAuthorizedDevices(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getMail(options?: GetterOptions): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  static get getters() {
    const excludedKeys = ['constructor']
    return Object.getOwnPropertyNames(Standardizer.prototype)
      .filter(propertyName => !excludedKeys.includes(propertyName))
  }

  /**
   * List all Standardizer plugins contained in the services sub-directory asynchronously
   */
  static getPlugins(): Promise<Array<typeof Standardizer>> {
    return fs.promises.readdir(path.resolve(__dirname, 'services'))
      .then(dirContent => dirContent.map(service => import(path.resolve(__dirname, 'services', service))))
      .then(promiseArr => Promise.all(promiseArr))
  }

  /**
   * List all Standardizer plugins contained in the services sub-directory synchronously
   */
  static getPluginsSync(): Array<typeof Standardizer> {
    return fs.readdirSync(path.resolve(__dirname, 'services')).map(
      // eslint-disable-next-line import/no-dynamic-require,global-require
      service => require(path.resolve(__dirname, 'services', service)),
    )
  }
}
