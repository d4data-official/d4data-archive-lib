export type GetterData<T> = { data: T, parsedFiles: Array<string> } | null

type GetterReturn<T> = Promise<GetterData<T>>

export default GetterReturn
