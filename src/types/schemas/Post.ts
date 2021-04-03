import Event from 'types/schemas/Event'
import Location from 'types/schemas/Location'
import Media from 'types/schemas/Media'
import Reaction from 'types/schemas/Reaction'

export default interface Post {
  creationDate: Date;

  sender: string

  title?: string;

  content?: string;

  metaData?: {
    /**
     * Post reactions (ex: likes)
     */
    reactions?: Array<Reaction>;

    /**
     * List of URL associated with the post
     */
    links?: Array<string>;

    userTags?: Array<string>

    locations?: Location;

    events?: Event;

    medias?: Array<Media>;
  }
}
