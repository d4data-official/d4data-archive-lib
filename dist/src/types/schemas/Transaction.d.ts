export default interface Transaction {
    /**
     * date of transaction (timestamp)
     */
    date?: number | undefined;
    /**
     * description of transaction
     */
    description?: string | undefined;
    /**
     * type of currency
     */
    currency: string;
    /**
     * positive/negative value of the transaction
     */
    value: number;
    /**
     * status of transaction (pending, done ...)
     */
    status?: string | undefined;
    /**
     * method used for payment
     */
    paymentMethod?: string | undefined;
    /**
     * product name
     */
    product: string;
}
