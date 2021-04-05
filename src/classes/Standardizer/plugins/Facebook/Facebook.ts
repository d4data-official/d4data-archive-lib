import { Transform, TransformCallback } from 'stream'
import iconv from 'iconv-lite'
import path from 'path'
import Standardizer, { EXTERNAL_GETTERS_DIR } from '../../Standardizer'
import Services from '../../../../types/Services'
import { PipelineStep } from '../../../Pipeline'

const preProcessors: Array<PipelineStep> = [
  // Pre-processor to fix bad string encoding in Facebook archive JSON files
  async function* utf8Translator(stream) {
    if (stream !== undefined) {
      for await (const chunk of stream) {
        const encodedStr = iconv.encode(chunk, 'latin1');
        const decodedStr = iconv.decode(encodedStr, 'utf8');
        yield decodedStr
      }
    }
  },
]

export default class Facebook extends Standardizer {
  constructor(extractedArchivePath: string) {
    super(extractedArchivePath)

    preProcessors.forEach(preProcessor => this.parser.addPreprocessor(preProcessor))
  }

  get service(): Services {
    return Services.FACEBOOK
  }

  get subServices(): Array<Services> {
    return []
  }

  get subStandardizers(): Array<Standardizer> {
    return []
  }
}

Standardizer.importExternalGettersSync(path.resolve(__dirname, EXTERNAL_GETTERS_DIR))
