// eslint-disable-next-line max-classes-per-file
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { ASchema } from 'types/schemas/ASchema';
import { Reaction } from 'types/schemas/Reaction';

/**
 *
 *
 * @class ChatMessage
 */
class ChatMessage {
/**
   *
   * The name of the sender
   *
   * @type {string}
   * @memberof ChatMessage
   */
  @IsString()
  sender!: string;

  /**
   *
   * The text sent by the sender
   *
   * @type {string}
   * @memberof ChatMessage
   */
  @IsOptional()
  @IsString()
  text?: string;

  /**
   *
   * URL of the meta data if any
   *
   * @type {string}
   * @memberof ChatMessage
   */
  @IsOptional()
  @IsString()
  @IsUrl()
  metaData?: string;

  /**
   *
   * reaction linked with message
   *
   * @type {Array<Reaction>}
   * @memberof ChatMessage
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reaction)
  reactions?: Array<Reaction>;
}

/**
 */
/**
 *
 * Class definition of one chat
 *
 * @export
 * @class Chat
 * @extends {ASchema<Chat>}
 */
export class Chat extends ASchema<Chat> {
/**
   *
   * List of chat participants
   *
   * @type {Array<string>}
   * @memberof Chat
   */
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  participants!: Array<string>;

  /**
   *
   * List of messages
   *
   * @type {Array<ChatMessage>}
   * @memberof Chat
   */
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatMessage)
  conversation!: Array<ChatMessage>;

  /**
   *
   * The name of the conversation
   *
   * @type {string}
   * @memberof Chat
   */
  @IsString()
  title!: string;
}
