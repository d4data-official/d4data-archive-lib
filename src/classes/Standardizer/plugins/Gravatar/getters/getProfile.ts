import Gravatar from '../Gravatar'
import withAutoParser from '../../../../../modules/Standardizer/withAutoParser'
import { Profile } from '../../../../../types/schemas'
import { MediaType } from '../../../../../types/schemas/Media'

export interface GravatarRawData {
  entry: [
    {
      id: string
      hash: string
      requestHash: number
      profileUrl: string
      preferredUsername: string
      thumbnailUrl: string
      photos: Array<{
        value: string
        type?: 'thumbnail' | string
      }>
      profileBackground: {
        color: string
        url: string
      }
      name: {
        givenName: string
        familyName: string
        formatted: string
      }
      displayName: string
      aboutMe?: string
      currentLocation?: string
      phoneNumbers: Array<{
        type: string
        value: string
      }>
      accounts: Array<{
        domain: string
        display: string
        url: string
        username: string
        verified: string
        shortname: string
      }>
      urls: Array<{
        value: string
        title: string
      }>
    },
  ]
}

Gravatar.prototype.getProfile = withAutoParser(async parser => {
  const [jsonFilePath] = await parser.listFiles('', {
    extensionWhitelist: ['json'],
  })

  if (!jsonFilePath) {
    return null
  }

  const fileContent: GravatarRawData = await parser.parseAsJSON(jsonFilePath)
  const rawData = fileContent.entry[0]

  if (!rawData) {
    return null
  }

  const profile: Profile = {
    username: rawData.preferredUsername,
    displayName: rawData.displayName,
    firstName: rawData.name.givenName,
    lastName: rawData.name.familyName,
    description: rawData.aboutMe,
    phoneNumbers: rawData.phoneNumbers.map(phoneNumber => ({
      name: phoneNumber.type,
      phoneNumber: phoneNumber.value,
    })),
    addresses: rawData.currentLocation ? [
      {
        name: 'Current location',
        address: {
          raw: rawData.currentLocation,
        },
      },
    ] : undefined,
    websites: rawData.urls.map(url => ({
      name: url.title,
      url: url.value,
    })),
    profilePicture: {
      current: {
        type: MediaType.IMAGE,
        url: rawData.thumbnailUrl,
      },
      history: rawData.photos
        .filter(photo => photo.type !== 'thumbnail')
        .map(photo => ({
          type: MediaType.IMAGE,
          url: photo.value,
        })),
    },
  }

  return { data: profile }
})
