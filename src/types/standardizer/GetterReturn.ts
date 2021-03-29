type GetterReturn<T> = Promise<{ data: T, parsedFiles: Array<string> } | null>

export default GetterReturn
