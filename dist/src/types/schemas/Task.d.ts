export default interface Task {
    /**
     * name of task
     */
    name: string;
    /**
     * date at witch the task was creates (timestamp)
     */
    createdAt?: Date | undefined;
    /**
     * date at witch the task was up: date (timestamp)
     */
    updateAt?: number | undefined;
    /**
     * date at witch the task was ended (timestamp)
     */
    endAt?: number | undefined;
    /**
     * due date of the task (timestamp)
     */
    dueDate?: Date | undefined;
    /**
     * status of the task
     */
    status: string;
    /**
     * description of the task
     */
    description?: string | undefined;
    /**
     * type of task
     */
    taskType?: string | undefined;
    /**
     * list of sub-task
     */
    children?: Array<Task> | undefined;
}
