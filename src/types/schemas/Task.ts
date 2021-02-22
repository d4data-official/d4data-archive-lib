/* eslint-disable max-classes-per-file */
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';

/**
 * JSON Task definition of setting property
 */
export class Task extends ASchema<Task> {
  /**
   * name of task
   */
  @IsString()
  name!: string;

  /**
   * date at witch the task was creates (timestamp)
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: number | Date;

  /**
   * date at witch the task was update (timestamp)
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updateAt?: number;

  /**
   * date at witch the task was ended (timestamp)
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  endAt?: number;

  /**
   * due date of the task (timestamp)
   */
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dueDate?: number;

  /**
   * status of the task
   */
  @IsString()
  status!: string;

  /**
   * description of the task
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   * type of task
   */
  @IsOptional()
  @IsString()
  taskType?: string;

  /**
   * list of sub-task
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Task)
  children?: Array<Task>;
}
