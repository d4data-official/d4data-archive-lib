import path from 'path'
import standardizerPluginsGetters from '../../utils/testGenerators/standardizerPluginsGetters'
import { EXTRACTION_DIR } from '../../utils/extractTestArchives'
import Gravatar from '../../../src/classes/Standardizer/plugins/Gravatar/Gravatar'

const { LOCAL_ARCHIVE_DIR } = process.env

standardizerPluginsGetters(new Gravatar(path.resolve(LOCAL_ARCHIVE_DIR ?? '', EXTRACTION_DIR, 'gravatar')))
