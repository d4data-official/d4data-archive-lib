import Standardizer from 'classes/Standardizer/Standardizer'
import {GetterOptions} from 'types/standardizer/Standardizer'
import API from 'types/schemas/API'

export default async function getAPI(this: Standardizer, options?: GetterOptions): Promise<API> {
    const profileRawData = await this.parser.parseAsJSON(
        'account/user.json',
        options?.parsingOptions,
    )
    return profileRawData.connections.map((connection: any) => ({
        name: connection.type,
    }))
}
