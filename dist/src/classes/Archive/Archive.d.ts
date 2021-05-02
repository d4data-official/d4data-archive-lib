import { ArchiveFormat, ExtractOptions } from '../../modules/ArchiveExtraction';
import Standardizer from '../Standardizer/Standardizer';
import Services from '../../types/Services';
import ArchiveMetaData from '../../types/schemas/ArchiveMetaData';
export declare const PLUGINS_DIR = "plugins";
export declare const OUTPUT_DIR: string;
export default abstract class Archive {
    path: string;
    outputDir: string;
    extractedArchivePath?: string;
    constructor(archivePath: string, outputDir?: string);
    get defaultOutputDir(): string;
    /**
     * Is archive has been extracted
     */
    isExtracted(): this is {
        extractedArchivePath: string;
    };
    /**
     * Get Service related to the archive
     */
    abstract get service(): Services;
    /**
     * Return service's standardizer if archive has been extracted or throw an error
     */
    abstract get standardizer(): Standardizer;
    /**
     * Explore non extracted archive to guess the source service
     */
    abstract identifyService(): Promise<boolean>;
    /**
     * Identify archive file format
     */
    identifyFormat(): Promise<ArchiveFormat>;
    /**
     * Get archive metadata
     */
    getMetadata(): Promise<ArchiveMetaData>;
    /**
     * Extract archive to given path
     */
    extract(options?: ExtractOptions & {
        outputDir?: string;
    }): Promise<Archive>;
    /**
     * List all Archive plugins contained in the services sub-directory asynchronously
     */
    static getPlugins(): Promise<Array<typeof Archive>>;
    /**
     * List all Archive plugins contained in the services sub-directory synchronously
     */
    static getPluginsSync(): Array<typeof Archive>;
}
