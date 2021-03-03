import { Stream } from 'stream'

export default async function streamToString(stream: Stream): Promise<string> {
  let data = ''

  return new Promise((resolve, reject) => {
    stream.on('data', chunk => data += chunk.toString())
    stream.on('error', error => reject(error))
    stream.on('end', () => resolve(data))
  })
}
