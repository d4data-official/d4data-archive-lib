import Reddit from '../Reddit'
import { Setting } from '../../../../../types/schemas'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

const SETTINGS_FILE = 'user_preferences.csv'

interface RedditSetting {
  preference: string,
  value: string
}

Reddit.prototype.getSettings = withAutoParser(async parser => {
  const { data: settingList } = await parser.parseAsCSV<RedditSetting>(SETTINGS_FILE)

  return settingList.map((setting): Setting => ({
    key: setting.preference,
    value: setting.value,
  }))
})
