import path from 'path'
import standardizerPluginsGetters from '../../utils/testGenerators/standardizerPluginsGetters'
import { EXTRACTION_DIR } from '../../utils/extractTestArchives'
import Google from '../../../src/classes/Standardizer/plugins/Google/Google'

const { LOCAL_ARCHIVE_DIR } = process.env

standardizerPluginsGetters(new Google(path.resolve(LOCAL_ARCHIVE_DIR ?? '', EXTRACTION_DIR, 'google')))
