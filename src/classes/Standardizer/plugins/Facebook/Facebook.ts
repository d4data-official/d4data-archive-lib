import path from 'path'
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
      const chunkStr: string = content.toString();
      const newChunkStr: string = chunkStr.replaceAll(/(?:\\u[0-9a-f]{4})+/g,
        (match: string) => {
          const uriEncodedString: string = match.replaceAll(/\\u00([0-9a-f]{2})/g,
            (_: any, group: string) => `%${ group.toUpperCase() }`);
          const uriDecodedString: string = decodeURI(uriEncodedString);
          const formattedString: string = uriDecodedString.replaceAll(/[\u0000-\u001F\u007F-\u009F]/g, '');
          return formattedString
        })
      yield newChunkStr
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
