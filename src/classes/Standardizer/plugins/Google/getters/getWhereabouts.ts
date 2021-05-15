import Google from '../Google'
import { Whereabout } from '../../../../../types/schemas';
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'

// eslint-disable-next-line
const WHEREABOUTS_FILE = 'Takeout/Historique\ des\ positions/Historique\ des\ positions.json'

interface GoogleWhereabouts {
  locations: Array<{
    timestampMs: string,
    latitudeE7: number,
    longitudeE7: number
  }>
}

Google.prototype.getWhereabouts = withAutoParser(async parser => {
  if (!(await parser.filesExist([WHEREABOUTS_FILE]))) {
    return null
  }
  const whereaboutList = await parser.parseAsJSON<GoogleWhereabouts>(WHEREABOUTS_FILE)
  const whereabouts : Array<Whereabout> = whereaboutList.locations.map((whereabout) => ({
    recordDate: new Date(whereabout.timestampMs),
    location: {
      absolutePosition: {
        latitude: whereabout.latitudeE7,
        longitude: whereabout.longitudeE7,
      },
    },
  }))

  return whereabouts
})
