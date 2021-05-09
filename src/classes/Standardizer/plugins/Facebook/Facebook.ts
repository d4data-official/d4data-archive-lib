import path from 'path'
import { v4 as uuidv4 } from 'uuid';
import Standardizer, { EXTERNAL_GETTERS_DIR } from '../../Standardizer'
import Services from '../../../../types/Services'
import { PipelineStep } from '../../../Pipeline'

export const preProcessors: Array<PipelineStep> = [
  // Pre-processor to fix bad string encoding in Facebook archive JSON files
  async function* utf8Translator(stream) {
    if (stream !== undefined) {
      let content = '';
      for await (const chunk of stream) {
        content += chunk.toString();
      }
      const MAGIC_STRING: string = uuidv4();
      const chunkStr: string = content.toString();
      const encodedURI: string = chunkStr.replaceAll('%', MAGIC_STRING);
      const semiFixedStr: string = encodedURI.replaceAll(/\\u00([0-9a-f]{2})/g,
        (_: any, group: string) => `%${ group.toUpperCase() }`)
      const fixedStr = semiFixedStr.replaceAll(/(?:%[A-Z0-9]{2})+/g, decodeURI)
      // eslint-disable-next-line no-control-regex
      const decodedStr = fixedStr.replaceAll(MAGIC_STRING, '%').replaceAll(/[\u0000-\u001F\u007F-\u009F]/g, '')
      yield decodedStr
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
