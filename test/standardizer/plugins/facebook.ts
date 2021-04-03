import path from 'path'
import standardizerPluginsGetters from '../../utils/testGenerators/standardizerPluginsGetters'
import { EXTRACTION_DIR } from '../../utils/extractTestArchives'
import Facebook from '../../../src/classes/Standardizer/plugins/Facebook/Facebook'

const { LOCAL_ARCHIVE_DIR } = process.env

standardizerPluginsGetters(new Facebook(path.resolve(LOCAL_ARCHIVE_DIR ?? '', EXTRACTION_DIR, 'facebook')))
