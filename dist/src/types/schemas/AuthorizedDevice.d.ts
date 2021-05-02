export default interface AuthorizedDevice {
    /**
       * name of device
       */
    name: string;
    /**
     * ip of device
     */
    ip?: string | undefined;
    /**
     * date when the device was authorized
     */
    authorizationDate?: Date | undefined;
}
