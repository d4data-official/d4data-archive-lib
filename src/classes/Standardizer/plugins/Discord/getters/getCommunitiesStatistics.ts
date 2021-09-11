import Discord from '../Discord'
import { StatisticType } from '../../../../../types/schemas/Statistic'

const fs = require('fs');

const COMMUNITIES_FOLDER = '/servers/';

function getCommunitiesIds(path : string) {
  return fs.readdirSync(path, { withFileTypes: true })
    .filter((dirent : any) => dirent.isDirectory())
    .map((dirent : any) => dirent.name);
}

function isServerAdmin(communityFolderPath : string) : Boolean {
  const files = fs.readdirSync(communityFolderPath);
  return files.length > 2
}

Discord.prototype.getCommunitiesStatistics = async function getCommunitiesStatistics() {
  const target = this.path + COMMUNITIES_FOLDER;
  const folders = getCommunitiesIds(target);

  let count = 0
  folders.forEach((folder : string) => {
    count += isServerAdmin(`${ target }/${ folder }`) ? 1 : 0
  });

  return {
    statistics: [
      {
        type: StatisticType.NUMBER,
        value: count,
        name: 'Number of server where the user is admin.',
      },
    ],
    parsedFiles: [],
  }
}
