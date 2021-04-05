import { access } from 'fs/promises';
import { constants } from 'fs';

/**
 * Returns boolean whether if given files exist
 */
export default async function filesExist(dirPaths: Array<string>): Promise<boolean> {
  return Promise.all(dirPaths.map((path) => access(path, constants.R_OK)))
    .then(() => true)
    .catch(() => false)
}
