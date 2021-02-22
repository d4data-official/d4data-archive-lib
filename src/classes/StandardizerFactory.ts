import StandardizerList from './Standardizer'
import Standardizer from './Standardizer/Standardizer'
import { Services } from '../types/Services'

export default class StandardizerFactory {
  path: string

  standardizers: Array<Standardizer> = (StandardizerList as any[]).map(standardizer => new standardizer(this.path))

  constructor(extractedArchivePath: string) {
    this.path = extractedArchivePath
  }

  getStandardizerFromService(service: Services): Standardizer | undefined {
    return this.standardizers.find(standardizer => standardizer.service === service)
  }
}
