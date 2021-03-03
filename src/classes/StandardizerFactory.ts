import Standardizer from 'classes/standardizer/Standardizer'
import { Services } from 'types/Services'

/**
 *
 *
 * @export
 * @class StandardizerFactory
 */
export default class StandardizerFactory {
  /**
   *
   *
   * @type {string}
   * @memberof StandardizerFactory
   */
  path: string

  /**
   *
   *
   * @type {Array<Standardizer>}
   * @memberof StandardizerFactory
   */
  // @ts-ignore
  standardizers: Array<Standardizer> = Standardizer.getPluginsSync().map(standardizer => new standardizer(this.path))

  /**
   * Creates an instance of StandardizerFactory.
   * @param {string} extractedArchivePath
   * @memberof StandardizerFactory
   */
  constructor(extractedArchivePath: string) {
    this.path = extractedArchivePath
  }

  /**
   *
   *
   * @param {Services} service
   * @return {(Standardizer | undefined)}
   * @memberof StandardizerFactory
   */
  getStandardizerFromService(service: Services): Standardizer | undefined {
    return this.standardizers.find(standardizer => standardizer.service === service)
  }
}
