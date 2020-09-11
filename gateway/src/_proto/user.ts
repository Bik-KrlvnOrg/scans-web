/* eslint-disable */
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface UserSuccessResponse {
  success: boolean;
}

export interface ListUsersRequest {
}

export interface ListUsersResponse {
  users: User[];
}

export interface GetUserRequest {
  id: string;
}

export interface CreateUserRequest {
  user: User | undefined;
}

export interface UpdateUserRequest {
  user: User | undefined;
}

export interface DeleteUserRequest {
  id: string;
}

const baseUser: object = {
  id: '',
  name: '',
  username: '',
  email: '',
  password: '',
};

const baseUserSuccessResponse: object = {
  success: false,
};

const baseListUsersRequest: object = {
};

const baseListUsersResponse: object = {
  users: undefined,
};

const baseGetUserRequest: object = {
  id: '',
};

const baseCreateUserRequest: object = {
  user: undefined,
};

const baseUpdateUserRequest: object = {
  user: undefined,
};

const baseDeleteUserRequest: object = {
  id: '',
};

/**
 *  Generated according to https://cloud.google.com/apis/design/standard_methods
 */
export interface UserService<Context extends DataLoaders> {

  listUsers(request: ListUsersRequest, ctx: Context): Promise<ListUsersResponse>;

  getUser(request: GetUserRequest, ctx: Context): Promise<User>;

  createUser(request: CreateUserRequest, ctx: Context): Promise<UserSuccessResponse>;

  updateUser(request: UpdateUserRequest, ctx: Context): Promise<UserSuccessResponse>;

  deleteUser(request: DeleteUserRequest, ctx: Context): Promise<UserSuccessResponse>;

}

/**
 *  Generated according to https://cloud.google.com/apis/design/standard_methods
 */
export interface UserServiceClient<Context extends DataLoaders> {

  listUsers(request: ListUsersRequest, ctx?: Context): Observable<ListUsersResponse>;

  getUser(request: GetUserRequest, ctx?: Context): Observable<User>;

  createUser(request: CreateUserRequest, ctx?: Context): Observable<UserSuccessResponse>;

  updateUser(request: UpdateUserRequest, ctx?: Context): Observable<UserSuccessResponse>;

  deleteUser(request: DeleteUserRequest, ctx?: Context): Observable<UserSuccessResponse>;

}

interface DataLoaders {

  getDataLoader<T>(identifier: string, constructorFn: () => T): T;

}

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.username);
    writer.uint32(34).string(message.email);
    writer.uint32(42).string(message.password);
    return writer;
  },
  decode(reader: Reader, length?: number): User {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUser) as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.username = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): User {
    const message = Object.create(baseUser) as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = '';
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = Object.create(baseUser) as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = '';
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = '';
    }
    return message;
  },
  toJSON(message: User): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.name = message.name || '';
    obj.username = message.username || '';
    obj.email = message.email || '';
    obj.password = message.password || '';
    return obj;
  },
};

export const UserSuccessResponse = {
  encode(message: UserSuccessResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.success);
    return writer;
  },
  decode(reader: Reader, length?: number): UserSuccessResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUserSuccessResponse) as UserSuccessResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserSuccessResponse {
    const message = Object.create(baseUserSuccessResponse) as UserSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UserSuccessResponse>): UserSuccessResponse {
    const message = Object.create(baseUserSuccessResponse) as UserSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
  toJSON(message: UserSuccessResponse): unknown {
    const obj: any = {};
    obj.success = message.success || false;
    return obj;
  },
};

export const ListUsersRequest = {
  encode(message: ListUsersRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(reader: Reader, length?: number): ListUsersRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListUsersRequest) as ListUsersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListUsersRequest {
    const message = Object.create(baseListUsersRequest) as ListUsersRequest;
    return message;
  },
  fromPartial(object: DeepPartial<ListUsersRequest>): ListUsersRequest {
    const message = Object.create(baseListUsersRequest) as ListUsersRequest;
    return message;
  },
  toJSON(message: ListUsersRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const ListUsersResponse = {
  encode(message: ListUsersResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): ListUsersResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListUsersResponse) as ListUsersResponse;
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListUsersResponse {
    const message = Object.create(baseListUsersResponse) as ListUsersResponse;
    message.users = [];
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListUsersResponse>): ListUsersResponse {
    const message = Object.create(baseListUsersResponse) as ListUsersResponse;
    message.users = [];
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map(e => e ? User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    return obj;
  },
};

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): GetUserRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseGetUserRequest) as GetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetUserRequest {
    const message = Object.create(baseGetUserRequest) as GetUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = Object.create(baseGetUserRequest) as GetUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    return obj;
  },
};

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): CreateUserRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreateUserRequest) as CreateUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateUserRequest {
    const message = Object.create(baseCreateUserRequest) as CreateUserRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateUserRequest>): CreateUserRequest {
    const message = Object.create(baseCreateUserRequest) as CreateUserRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    return obj;
  },
};

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: Writer = Writer.create()): Writer {
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): UpdateUserRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUpdateUserRequest) as UpdateUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateUserRequest {
    const message = Object.create(baseUpdateUserRequest) as UpdateUserRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateUserRequest>): UpdateUserRequest {
    const message = Object.create(baseUpdateUserRequest) as UpdateUserRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    obj.user = message.user ? User.toJSON(message.user) : undefined;
    return obj;
  },
};

export const DeleteUserRequest = {
  encode(message: DeleteUserRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): DeleteUserRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseDeleteUserRequest) as DeleteUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteUserRequest {
    const message = Object.create(baseDeleteUserRequest) as DeleteUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteUserRequest>): DeleteUserRequest {
    const message = Object.create(baseDeleteUserRequest) as DeleteUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    return obj;
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T[P] extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T[P] extends Date | Function | Uint8Array | undefined
  ? T[P]
  : T[P] extends infer U | undefined
  ? DeepPartial<U>
  : T[P] extends object
  ? DeepPartial<T[P]>
  : T[P]
};