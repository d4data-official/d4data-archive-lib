import Services from '../../src/types/Services';
export declare type ArchiveExtractionReport = Partial<Record<Services, string>>;
export declare const EXTRACTION_DIR = ".d4data_archive_lib";
export default function extractTestArchives(archiveDir: string, options?: {
    onSkip?: (reason: string) => void;
    onExtracted?: (archivePath: string) => void;
}): Promise<ArchiveExtractionReport>;
