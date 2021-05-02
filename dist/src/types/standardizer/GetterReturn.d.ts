export declare type GetterData<T> = {
    data: T;
    parsedFiles: Array<string>;
} | null;
declare type GetterReturn<T> = Promise<GetterData<T>>;
export default GetterReturn;
