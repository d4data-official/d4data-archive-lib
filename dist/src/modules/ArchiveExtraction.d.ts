export declare enum ArchiveFormat {
    ZIP = "zip",
    UNKNOWN = "unknown"
}
export interface ExtractOptions {
    onProgress?: (fileName: string, extractedCount: number, total: number) => void;
    format?: ArchiveFormat;
}
/**
 * Identify archive file format
 */
export declare function identifyArchiveFormat(path: string): Promise<ArchiveFormat>;
export default function extractArchive(path: string, outputPath: string, options?: ExtractOptions): Promise<void>;
export declare function countFileInZip(filePath: string): Promise<number>;
