/// <reference types="node" />
import { Stream } from 'stream';
/**
 * Read and accumulate stream data chunks and wait for stream ending to return full data
 * WARNING : This function will put all stream data into RAM, use with caution!
 */
export default function streamToString(stream: Stream): Promise<string>;
