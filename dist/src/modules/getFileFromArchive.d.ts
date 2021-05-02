/// <reference types="node" />
import { Stream } from 'stream';
export default function getFileFromArchive(archivePath: string, relativePathList: Array<string>): Promise<Array<Stream | undefined>>;
export declare function getFileFromZIP(archivePath: string, relativePathList: Array<string>): Promise<Array<Stream | undefined>>;
