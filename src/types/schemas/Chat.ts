// eslint-disable-next-line max-classes-per-file
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { ASchema } from './ASchema';
import { Reaction } from './Reaction';

class ChatMessage {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'chatMessage';

  /**
 * The name of the sender
 */
  @IsString()
  sender!: string;

  /**
   * The text sent by the sender
   */
  @IsOptional()
  @IsString()
  text?: string;

  /**
   * URL of the meta data if any
   */
  @IsOptional()
  @IsString()
  @IsUrl()
  metaData?: string;

  /**
   * reaction linked with message
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reaction)
  reactions?: Array<Omit<Reaction, 'isValid'>>;
}

/**
 * JSON Schema definition of one chat
 */
export class Chat extends ASchema<Chat> {
  /**
   * @ignore
   * Obect type name
   */
  __type?: string = 'chat';

  /**
   * List of chat participants
   */
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  participants!: Array<string>;

  /**
   * List of messages
   */
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatMessage)
  conversation!: Array<ChatMessage>;

  /**
   * The name of the conversation
   */
  @IsString()
  title!: string;
}
