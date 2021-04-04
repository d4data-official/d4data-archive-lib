import path from 'path'
import standardizerPluginsGetters from '../../utils/testGenerators/standardizerPluginsGetters'
import { EXTRACTION_DIR } from '../../utils/extractTestArchives'
import Reddit from '../../../src/classes/Standardizer/plugins/Reddit/Reddit'

const { LOCAL_ARCHIVE_DIR } = process.env

standardizerPluginsGetters(new Reddit(path.resolve(LOCAL_ARCHIVE_DIR ?? '', EXTRACTION_DIR, 'reddit')))
