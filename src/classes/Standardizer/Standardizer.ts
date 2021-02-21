import { Services } from '../../types/Services'

export default abstract class Standardizer {
  path: string

  constructor(extractedArchivePath: string) {
    this.path = extractedArchivePath
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

  async getProfile(): Promise<object | null> {
    return Promise.resolve(null)
  }

  async getFriends(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getFollowings(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getFollowers(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getContacts(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getWhereabouts(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getNotifications(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getChats(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getComments(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getPosts(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getAPIs(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getConnections(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getCommunities(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getSettings(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getReacted(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getMedias(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getTransactions(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getBrowserData(): Promise<object | null> {
    return Promise.resolve(null)
  }

  async getTasks(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getAuthorizedDevices(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  async getMail(): Promise<Array<object> | null> {
    return Promise.resolve(null)
  }

  static get getters() {
    const excludedKeys = ['constructor']
    return Object.getOwnPropertyNames(Standardizer.prototype)
      .filter(propertyName => !excludedKeys.includes(propertyName))
  }
}
