import Archive from './Archive/Archive';
import Services from '../types/Services';
import Standardizer from './Standardizer/Standardizer';
export default class ArchiveFactory {
    path: string;
    outputDir?: string;
    plugins: Array<Archive>;
    constructor(archivePath: string, outputDir?: string, plugins?: Array<Archive>);
    identify(): Promise<Services>;
    getServiceArchive(service: Services): Archive | undefined;
    getPlugin(): Promise<Archive>;
    getStandardizer(): Promise<Standardizer>;
    static init(archivePath: string, outputDir?: string, plugins?: Array<Archive>): Promise<ArchiveFactory>;
}
