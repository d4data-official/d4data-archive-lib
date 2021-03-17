import { ISchema } from 'types/schemas/ISchema';

/**
 * JSON Task definition of setting property
 */
export interface Task extends ISchema {
/**
   *
   * name of task
   *
   */
  name: string

  /**
   *
   * date at witch the task was creates (timestamp)
   *
   * @type {(number | Date)}
   */
  createdAt?: number | Date;

  /**
   *
   * date at witch the task was up: date (timestamp)
   *
   */
  updateAt?: number;

  /**
   *
   * date at witch the task was ended (timestamp)
   *
   */
  endAt?: number;

  /**
   *
   * due date of the task (timestamp)
   *
   */
  dueDate?: number;

  /**
   *
   * status of the task
   *
   */
  status: string

  /**
   *
   * description of the task
   *
   */
  description?: string;

  /**
   *
   * type of task
   *
   */
  taskType?: string;

  /**
   *
   * list of sub-task
   *
   */
  children?: Array<Task>;
}
