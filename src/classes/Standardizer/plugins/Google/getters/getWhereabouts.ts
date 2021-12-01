import Google from '../Google'
import { Whereabout } from '../../../../../types/schemas'
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
  const { data: rawWhereaboutsList } = await parser.parseAsJSON<GoogleWhereabouts>(WHEREABOUTS_FILE)
  const whereaboutsList: Array<Whereabout> = rawWhereaboutsList.locations.map((whereabouts) => ({
    recordDate: new Date(parseInt(whereabouts.timestampMs, 10)),
    location: {
      absolutePosition: {
        latitude: (whereabouts.latitudeE7 / 10000000),
        longitude: (whereabouts.longitudeE7 / 10000000),
      },
    },
  }))

  return whereaboutsList
})
