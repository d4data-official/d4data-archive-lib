import SERVICES from '../types/SERVICES'
import StandardizerList from './Standardizer'
import Standardizer from './Standardizer/Standardizer'

export default class StandardizerFactory {
  path: string

  standardizers: Array<Standardizer> = StandardizerList.map(standardizer => new standardizer(this.path))

  constructor(extractedArchivePath: string) {
    this.path = extractedArchivePath
  }

  getStandardizerFromService(service: SERVICES): Standardizer | undefined {
    return this.standardizers.find(standardizer => standardizer.service === service)
  }
}
