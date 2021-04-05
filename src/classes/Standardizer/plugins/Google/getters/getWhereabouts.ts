import Google from '../Google'
import { Whereabout } from '../../../../../types/schemas';

// eslint-disable-next-line
const WHEREABOUTS_FILE = 'Takeout/Historique\ des\ positions/Historique\ des\ positions.json'

interface GoogleWhereabouts {
  locations: Array<{
    timestampMs: string,
    latitudeE7: number,
    longitudeE7: number
  }>
}

Google.prototype.getWhereabouts = async function getWhereabouts(options) {
  const whereaboutList = await this.parser.parseAsJSON<GoogleWhereabouts>(WHEREABOUTS_FILE, options?.parsingOptions)

  const whereabouts : Array<Whereabout> = whereaboutList.locations.map((whereabout) => ({
    recordDate: new Date(whereabout.timestampMs),
    location: {
      absolutePosition: {
        latitude: whereabout.latitudeE7,
        longitude: whereabout.longitudeE7,
      },
    },
  }))

  return {
    data: whereabouts,
    parsedFiles: [WHEREABOUTS_FILE],
  }
}
