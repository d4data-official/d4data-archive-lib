import Services from '../types/Services'
import Standardizer from './Standardizer/Standardizer'

export default class StandardizerFactory {
  path: string

  standardizers: Array<Standardizer>

  constructor(extractedArchivePath: string) {
    this.path = extractedArchivePath
    // @ts-ignore
    this.standardizers = Standardizer.getPluginsSync().map(standardizer => new standardizer(this.path))
  }

  getStandardizerFromService(service: Services): Standardizer | undefined {
    return this.standardizers.find(standardizer => standardizer.service === service)
  }
}
