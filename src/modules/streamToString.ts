import { Stream } from 'stream'

/**
 * Read and accumulate stream data chunks and wait for stream ending to return full data
 * WARNING : This function will put all stream data into RAM, use with caution!
 */
export default async function streamToString(stream: Stream): Promise<string> {
  let data = ''

  return new Promise((resolve, reject) => {
    stream.on('data', chunk => data += chunk.toString())
    stream.on('error', error => reject(error))
    stream.on('end', () => resolve(data))
  })
}
