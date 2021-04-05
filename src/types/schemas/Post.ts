import Event from 'types/schemas/Event'
import Location from 'types/schemas/Location'
import Media from 'types/schemas/Media'
import Reaction from 'types/schemas/Reaction'

export default interface Post {
  creationDate: Date;

  sender: string

  title?: string | undefined

  content?: string | undefined

  metaData?: {
    /**
     * Post reactions (ex: likes)
     */
    reactions?: Array<Reaction> | undefined

    /**
     * List of URL associated with the post
     */
    links?: Array<string> | undefined

    userTags?: Array<string> | undefined

    locations?: Location | undefined

    events?: Event | undefined

    medias?: Array<Media> | undefined
  } | undefined
}
