import { promises as fsPromises, constants } from 'fs';

/**
 * Returns boolean whether if given files exist
 */
export default async function filesExist(dirPaths: Array<string>): Promise<boolean> {
  return Promise.all(dirPaths.map((path) => fsPromises.access(path, constants.R_OK)))
    .then(() => true)
    .catch(() => false)
}
