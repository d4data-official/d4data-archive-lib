/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';

/**
 * JSON Task definition of setting property
 */
export class Task extends ASchema<Task> {
/**
   *
   * name of task
   *
   * @type {string}
   * @memberof Task
   */
  @IsString()
  name!: string;

  /**
   *
   * date at witch the task was creates (timestamp)
   *
   * @type {(number | Date)}
   * @memberof Task
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: number | Date;

  /**
   *
   * date at witch the task was update (timestamp)
   *
   * @type {number}
   * @memberof Task
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updateAt?: number;

  /**
   *
   * date at witch the task was ended (timestamp)
   *
   * @type {number}
   * @memberof Task
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  endAt?: number;

  /**
   *
   * due date of the task (timestamp)
   *
   * @type {number}
   * @memberof Task
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dueDate?: number;

  /**
   *
   * status of the task
   *
   * @type {string}
   * @memberof Task
   */
  @IsString()
  status!: string;

  /**
   *
   * description of the task
   *
   * @type {string}
   * @memberof Task
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   *
   * type of task
   *
   * @type {string}
   * @memberof Task
   */
  @IsOptional()
  @IsString()
  taskType?: string;

  /**
   *
   * list of sub-task
   *
   * @type {Array<Task>}
   * @memberof Task
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Task)
  children?: Array<Task>;
}
