import path from 'path'
import standardizerPluginsGetters from '../../utils/testGenerators/standardizerPluginsGetters'
import { EXTRACTION_DIR } from '../../utils/extractTestArchives'
import Discord from '../../../src/classes/Standardizer/plugins/Discord/Discord'

const { LOCAL_ARCHIVE_DIR } = process.env

standardizerPluginsGetters(new Discord(path.resolve(LOCAL_ARCHIVE_DIR ?? '', EXTRACTION_DIR, 'discord')))
