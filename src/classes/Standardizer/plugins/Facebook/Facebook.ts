import { Transform, TransformCallback } from 'stream'
import iconv from 'iconv-lite'
import path from 'path'
import Standardizer, { EXTERNAL_GETTERS_DIR } from '../../Standardizer'
import Services from '../../../../types/Services'
import { PipelineStep } from '../../../Pipeline'

export const preProcessors: Array<PipelineStep> = [
  // Pre-processor to fix bad string encoding in Facebook archive JSON files
  new Transform({
    transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback) {
      const chunkStr: string = chunk.toString()
      const convertedUnicodeStr = chunkStr.replace(
        /\\u([\d\w]{4})/gi,
        (_, group) => String.fromCharCode(parseInt(group, 16)),
      )
      const utf8Str = iconv.decode(iconv.encode(convertedUnicodeStr, 'latin1'), 'utf8')

      callback(null, utf8Str)
    },
  }),
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
