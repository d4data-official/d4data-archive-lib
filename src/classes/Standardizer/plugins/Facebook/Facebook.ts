import path from 'path'
import Standardizer, { EXTERNAL_GETTERS_DIR } from '../../Standardizer'
import Services from '../../../../types/Services'
import { PipelineStep } from '../../../Pipeline'

export const preProcessors: Array<PipelineStep> = [
  // Pre-processor to fix bad string encoding in Facebook archive JSON files
  async function* utf8Translator(stream) {
    if (stream !== undefined) {
      for await (const chunk of stream) {
        const chunkStr: string = chunk.toString();
        const semiFixedStr: string = chunkStr.replaceAll(/\\u00([0-9a-f]{2})/g,
          (_: any, group: string) => `%${ group.toUpperCase() }`)
        const fixedStr = decodeURI(semiFixedStr)
        const newChunk = Buffer.from(fixedStr, 'utf8');
        yield newChunk
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
