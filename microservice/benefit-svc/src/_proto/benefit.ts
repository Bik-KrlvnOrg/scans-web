/* eslint-disable */
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Premium {
  id: string;
  name: string;
  description: string;
  rates: Rate[];
  limit: number;
}

export interface Rate {
  id: string;
  characteristics: string;
  value: number;
  premium: Premium | undefined;
}

export interface CreateRateRequest {
  rates: Rate[];
}

export interface PremiumSuccessResponse {
  success: boolean;
}

export interface FindPremiumsRequest {
}

export interface ListPremiumsResponse {
  premiums: Premium[];
}

export interface GetPremiumRequest {
  id: string;
}

export interface CreatePremiumRequest {
  premium: Premium | undefined;
}

export interface UpdatePremiumRequest {
  premium: Premium | undefined;
}

export interface DeletePremiumRequest {
  id: string;
}

export interface Cover {
  id: string;
  name: string;
  description: string;
  amount: number;
  coverage: string;
  patientType: PatientType;
  premium: Premium | undefined;
}

export interface CoverSuccessResponse {
  success: boolean;
}

export interface ListCoversRequest {
}

export interface ListCoversResponse {
  covers: Cover[];
}

export interface GetCoverRequest {
  id: string;
}

export interface CreateCoverRequest {
  cover: Cover | undefined;
}

export interface UpdateCoverRequest {
  cover: Cover | undefined;
}

export interface DeleteCoverRequest {
  id: string;
}

const basePremium: object = {
  id: '',
  name: '',
  description: '',
  rates: undefined,
  limit: 0,
};

const baseRate: object = {
  id: '',
  characteristics: '',
  value: 0,
  premium: undefined,
};

const baseCreateRateRequest: object = {
  rates: undefined,
};

const basePremiumSuccessResponse: object = {
  success: false,
};

const baseFindPremiumsRequest: object = {
};

const baseListPremiumsResponse: object = {
  premiums: undefined,
};

const baseGetPremiumRequest: object = {
  id: '',
};

const baseCreatePremiumRequest: object = {
  premium: undefined,
};

const baseUpdatePremiumRequest: object = {
  premium: undefined,
};

const baseDeletePremiumRequest: object = {
  id: '',
};

const baseCover: object = {
  id: '',
  name: '',
  description: '',
  amount: 0,
  coverage: '',
  patientType: 0,
  premium: undefined,
};

const baseCoverSuccessResponse: object = {
  success: false,
};

const baseListCoversRequest: object = {
};

const baseListCoversResponse: object = {
  covers: undefined,
};

const baseGetCoverRequest: object = {
  id: '',
};

const baseCreateCoverRequest: object = {
  cover: undefined,
};

const baseUpdateCoverRequest: object = {
  cover: undefined,
};

const baseDeleteCoverRequest: object = {
  id: '',
};

export interface PremiumService<Context extends DataLoaders> {

  listPremiums(request: FindPremiumsRequest, ctx: Context): Promise<ListPremiumsResponse>;

  getPremium(request: GetPremiumRequest, ctx: Context): Promise<Premium>;

  createPremium(request: CreatePremiumRequest, ctx: Context): Promise<PremiumSuccessResponse>;

  createPremiumRate(request: CreateRateRequest, ctx: Context): Promise<PremiumSuccessResponse>;

  updatePremium(request: UpdatePremiumRequest, ctx: Context): Promise<PremiumSuccessResponse>;

  deletePremium(request: DeletePremiumRequest, ctx: Context): Promise<PremiumSuccessResponse>;

}

export interface PremiumServiceClient<Context extends DataLoaders> {

  listPremiums(request: FindPremiumsRequest, ctx?: Context): Observable<ListPremiumsResponse>;

  getPremium(request: GetPremiumRequest, ctx?: Context): Observable<Premium>;

  createPremium(request: CreatePremiumRequest, ctx?: Context): Observable<PremiumSuccessResponse>;

  createPremiumRate(request: CreateRateRequest, ctx?: Context): Observable<PremiumSuccessResponse>;

  updatePremium(request: UpdatePremiumRequest, ctx?: Context): Observable<PremiumSuccessResponse>;

  deletePremium(request: DeletePremiumRequest, ctx?: Context): Observable<PremiumSuccessResponse>;

}

/**
 *  #region COVER
 *  Generated according to https://cloud.google.com/apis/design/standard_methods
 */
export interface CoverService<Context extends DataLoaders> {

  listCovers(request: ListCoversRequest, ctx: Context): Promise<ListCoversResponse>;

  getCover(request: GetCoverRequest, ctx: Context): Promise<Cover>;

  createCover(request: CreateCoverRequest, ctx: Context): Promise<Cover>;

  updateCover(request: UpdateCoverRequest, ctx: Context): Promise<CoverSuccessResponse>;

  deleteCover(request: DeleteCoverRequest, ctx: Context): Promise<CoverSuccessResponse>;

}

/**
 *  #region COVER
 *  Generated according to https://cloud.google.com/apis/design/standard_methods
 */
export interface CoverServiceClient<Context extends DataLoaders> {

  listCovers(request: ListCoversRequest, ctx?: Context): Observable<ListCoversResponse>;

  getCover(request: GetCoverRequest, ctx?: Context): Observable<Cover>;

  createCover(request: CreateCoverRequest, ctx?: Context): Observable<Cover>;

  updateCover(request: UpdateCoverRequest, ctx?: Context): Observable<CoverSuccessResponse>;

  deleteCover(request: DeleteCoverRequest, ctx?: Context): Observable<CoverSuccessResponse>;

}

interface DataLoaders {

  getDataLoader<T>(identifier: string, constructorFn: () => T): T;

}

export const PatientType = {
  OUT_PATIENT: 0 as PatientType,
  IN_PATIENT: 1 as PatientType,
  fromJSON(object: any): PatientType {
    switch (object) {
      case 0:
      case "OUT_PATIENT":
        return PatientType.OUT_PATIENT;
      case 1:
      case "IN_PATIENT":
        return PatientType.IN_PATIENT;
      default:
        throw new global.Error(`Invalid value ${object}`);
    }
  },
  toJSON(object: PatientType): string {
    switch (object) {
      case PatientType.OUT_PATIENT:
        return "OUT_PATIENT";
      case PatientType.IN_PATIENT:
        return "IN_PATIENT";
      default:
        return "UNKNOWN";
    }
  },
}

export type PatientType = 0 | 1;

export const Premium = {
  encode(message: Premium, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.description);
    for (const v of message.rates) {
      Rate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(41).double(message.limit);
    return writer;
  },
  decode(reader: Reader, length?: number): Premium {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(basePremium) as Premium;
    message.rates = [];
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
          message.description = reader.string();
          break;
        case 4:
          message.rates.push(Rate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.limit = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Premium {
    const message = Object.create(basePremium) as Premium;
    message.rates = [];
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
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = '';
    }
    if (object.rates !== undefined && object.rates !== null) {
      for (const e of object.rates) {
        message.rates.push(Rate.fromJSON(e));
      }
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Premium>): Premium {
    const message = Object.create(basePremium) as Premium;
    message.rates = [];
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
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = '';
    }
    if (object.rates !== undefined && object.rates !== null) {
      for (const e of object.rates) {
        message.rates.push(Rate.fromPartial(e));
      }
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    return message;
  },
  toJSON(message: Premium): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.name = message.name || '';
    obj.description = message.description || '';
    if (message.rates) {
      obj.rates = message.rates.map(e => e ? Rate.toJSON(e) : undefined);
    } else {
      obj.rates = [];
    }
    obj.limit = message.limit || 0;
    return obj;
  },
};

export const Rate = {
  encode(message: Rate, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.characteristics);
    writer.uint32(25).double(message.value);
    if (message.premium !== undefined && message.premium !== undefined) {
      Premium.encode(message.premium, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): Rate {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseRate) as Rate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.characteristics = reader.string();
          break;
        case 3:
          message.value = reader.double();
          break;
        case 4:
          message.premium = Premium.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Rate {
    const message = Object.create(baseRate) as Rate;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    if (object.characteristics !== undefined && object.characteristics !== null) {
      message.characteristics = String(object.characteristics);
    } else {
      message.characteristics = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromJSON(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Rate>): Rate {
    const message = Object.create(baseRate) as Rate;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    if (object.characteristics !== undefined && object.characteristics !== null) {
      message.characteristics = object.characteristics;
    } else {
      message.characteristics = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromPartial(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  toJSON(message: Rate): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.characteristics = message.characteristics || '';
    obj.value = message.value || 0;
    obj.premium = message.premium ? Premium.toJSON(message.premium) : undefined;
    return obj;
  },
};

export const CreateRateRequest = {
  encode(message: CreateRateRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.rates) {
      Rate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): CreateRateRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreateRateRequest) as CreateRateRequest;
    message.rates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rates.push(Rate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateRateRequest {
    const message = Object.create(baseCreateRateRequest) as CreateRateRequest;
    message.rates = [];
    if (object.rates !== undefined && object.rates !== null) {
      for (const e of object.rates) {
        message.rates.push(Rate.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateRateRequest>): CreateRateRequest {
    const message = Object.create(baseCreateRateRequest) as CreateRateRequest;
    message.rates = [];
    if (object.rates !== undefined && object.rates !== null) {
      for (const e of object.rates) {
        message.rates.push(Rate.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CreateRateRequest): unknown {
    const obj: any = {};
    if (message.rates) {
      obj.rates = message.rates.map(e => e ? Rate.toJSON(e) : undefined);
    } else {
      obj.rates = [];
    }
    return obj;
  },
};

export const PremiumSuccessResponse = {
  encode(message: PremiumSuccessResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.success);
    return writer;
  },
  decode(reader: Reader, length?: number): PremiumSuccessResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(basePremiumSuccessResponse) as PremiumSuccessResponse;
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
  fromJSON(object: any): PremiumSuccessResponse {
    const message = Object.create(basePremiumSuccessResponse) as PremiumSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<PremiumSuccessResponse>): PremiumSuccessResponse {
    const message = Object.create(basePremiumSuccessResponse) as PremiumSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
  toJSON(message: PremiumSuccessResponse): unknown {
    const obj: any = {};
    obj.success = message.success || false;
    return obj;
  },
};

export const FindPremiumsRequest = {
  encode(message: FindPremiumsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(reader: Reader, length?: number): FindPremiumsRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseFindPremiumsRequest) as FindPremiumsRequest;
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
  fromJSON(object: any): FindPremiumsRequest {
    const message = Object.create(baseFindPremiumsRequest) as FindPremiumsRequest;
    return message;
  },
  fromPartial(object: DeepPartial<FindPremiumsRequest>): FindPremiumsRequest {
    const message = Object.create(baseFindPremiumsRequest) as FindPremiumsRequest;
    return message;
  },
  toJSON(message: FindPremiumsRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const ListPremiumsResponse = {
  encode(message: ListPremiumsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.premiums) {
      Premium.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): ListPremiumsResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListPremiumsResponse) as ListPremiumsResponse;
    message.premiums = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.premiums.push(Premium.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListPremiumsResponse {
    const message = Object.create(baseListPremiumsResponse) as ListPremiumsResponse;
    message.premiums = [];
    if (object.premiums !== undefined && object.premiums !== null) {
      for (const e of object.premiums) {
        message.premiums.push(Premium.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListPremiumsResponse>): ListPremiumsResponse {
    const message = Object.create(baseListPremiumsResponse) as ListPremiumsResponse;
    message.premiums = [];
    if (object.premiums !== undefined && object.premiums !== null) {
      for (const e of object.premiums) {
        message.premiums.push(Premium.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListPremiumsResponse): unknown {
    const obj: any = {};
    if (message.premiums) {
      obj.premiums = message.premiums.map(e => e ? Premium.toJSON(e) : undefined);
    } else {
      obj.premiums = [];
    }
    return obj;
  },
};

export const GetPremiumRequest = {
  encode(message: GetPremiumRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): GetPremiumRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseGetPremiumRequest) as GetPremiumRequest;
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
  fromJSON(object: any): GetPremiumRequest {
    const message = Object.create(baseGetPremiumRequest) as GetPremiumRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetPremiumRequest>): GetPremiumRequest {
    const message = Object.create(baseGetPremiumRequest) as GetPremiumRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: GetPremiumRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    return obj;
  },
};

export const CreatePremiumRequest = {
  encode(message: CreatePremiumRequest, writer: Writer = Writer.create()): Writer {
    if (message.premium !== undefined && message.premium !== undefined) {
      Premium.encode(message.premium, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): CreatePremiumRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreatePremiumRequest) as CreatePremiumRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.premium = Premium.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreatePremiumRequest {
    const message = Object.create(baseCreatePremiumRequest) as CreatePremiumRequest;
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromJSON(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreatePremiumRequest>): CreatePremiumRequest {
    const message = Object.create(baseCreatePremiumRequest) as CreatePremiumRequest;
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromPartial(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  toJSON(message: CreatePremiumRequest): unknown {
    const obj: any = {};
    obj.premium = message.premium ? Premium.toJSON(message.premium) : undefined;
    return obj;
  },
};

export const UpdatePremiumRequest = {
  encode(message: UpdatePremiumRequest, writer: Writer = Writer.create()): Writer {
    if (message.premium !== undefined && message.premium !== undefined) {
      Premium.encode(message.premium, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): UpdatePremiumRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUpdatePremiumRequest) as UpdatePremiumRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.premium = Premium.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdatePremiumRequest {
    const message = Object.create(baseUpdatePremiumRequest) as UpdatePremiumRequest;
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromJSON(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdatePremiumRequest>): UpdatePremiumRequest {
    const message = Object.create(baseUpdatePremiumRequest) as UpdatePremiumRequest;
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromPartial(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  toJSON(message: UpdatePremiumRequest): unknown {
    const obj: any = {};
    obj.premium = message.premium ? Premium.toJSON(message.premium) : undefined;
    return obj;
  },
};

export const DeletePremiumRequest = {
  encode(message: DeletePremiumRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): DeletePremiumRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseDeletePremiumRequest) as DeletePremiumRequest;
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
  fromJSON(object: any): DeletePremiumRequest {
    const message = Object.create(baseDeletePremiumRequest) as DeletePremiumRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeletePremiumRequest>): DeletePremiumRequest {
    const message = Object.create(baseDeletePremiumRequest) as DeletePremiumRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: DeletePremiumRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    return obj;
  },
};

export const Cover = {
  encode(message: Cover, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.description);
    writer.uint32(33).double(message.amount);
    writer.uint32(42).string(message.coverage);
    writer.uint32(48).int32(message.patientType);
    if (message.premium !== undefined && message.premium !== undefined) {
      Premium.encode(message.premium, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): Cover {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCover) as Cover;
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
          message.description = reader.string();
          break;
        case 4:
          message.amount = reader.double();
          break;
        case 5:
          message.coverage = reader.string();
          break;
        case 6:
          message.patientType = reader.int32() as any;
          break;
        case 7:
          message.premium = Premium.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Cover {
    const message = Object.create(baseCover) as Cover;
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
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = '';
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.coverage !== undefined && object.coverage !== null) {
      message.coverage = String(object.coverage);
    } else {
      message.coverage = '';
    }
    if (object.patientType !== undefined && object.patientType !== null) {
      message.patientType = PatientType.fromJSON(object.patientType);
    } else {
      message.patientType = 0;
    }
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromJSON(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Cover>): Cover {
    const message = Object.create(baseCover) as Cover;
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
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = '';
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.coverage !== undefined && object.coverage !== null) {
      message.coverage = object.coverage;
    } else {
      message.coverage = '';
    }
    if (object.patientType !== undefined && object.patientType !== null) {
      message.patientType = object.patientType;
    } else {
      message.patientType = 0;
    }
    if (object.premium !== undefined && object.premium !== null) {
      message.premium = Premium.fromPartial(object.premium);
    } else {
      message.premium = undefined;
    }
    return message;
  },
  toJSON(message: Cover): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.name = message.name || '';
    obj.description = message.description || '';
    obj.amount = message.amount || 0;
    obj.coverage = message.coverage || '';
    obj.patientType = PatientType.toJSON(message.patientType);
    obj.premium = message.premium ? Premium.toJSON(message.premium) : undefined;
    return obj;
  },
};

export const CoverSuccessResponse = {
  encode(message: CoverSuccessResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.success);
    return writer;
  },
  decode(reader: Reader, length?: number): CoverSuccessResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCoverSuccessResponse) as CoverSuccessResponse;
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
  fromJSON(object: any): CoverSuccessResponse {
    const message = Object.create(baseCoverSuccessResponse) as CoverSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CoverSuccessResponse>): CoverSuccessResponse {
    const message = Object.create(baseCoverSuccessResponse) as CoverSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
  toJSON(message: CoverSuccessResponse): unknown {
    const obj: any = {};
    obj.success = message.success || false;
    return obj;
  },
};

export const ListCoversRequest = {
  encode(message: ListCoversRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(reader: Reader, length?: number): ListCoversRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListCoversRequest) as ListCoversRequest;
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
  fromJSON(object: any): ListCoversRequest {
    const message = Object.create(baseListCoversRequest) as ListCoversRequest;
    return message;
  },
  fromPartial(object: DeepPartial<ListCoversRequest>): ListCoversRequest {
    const message = Object.create(baseListCoversRequest) as ListCoversRequest;
    return message;
  },
  toJSON(message: ListCoversRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const ListCoversResponse = {
  encode(message: ListCoversResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.covers) {
      Cover.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): ListCoversResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListCoversResponse) as ListCoversResponse;
    message.covers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.covers.push(Cover.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListCoversResponse {
    const message = Object.create(baseListCoversResponse) as ListCoversResponse;
    message.covers = [];
    if (object.covers !== undefined && object.covers !== null) {
      for (const e of object.covers) {
        message.covers.push(Cover.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListCoversResponse>): ListCoversResponse {
    const message = Object.create(baseListCoversResponse) as ListCoversResponse;
    message.covers = [];
    if (object.covers !== undefined && object.covers !== null) {
      for (const e of object.covers) {
        message.covers.push(Cover.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListCoversResponse): unknown {
    const obj: any = {};
    if (message.covers) {
      obj.covers = message.covers.map(e => e ? Cover.toJSON(e) : undefined);
    } else {
      obj.covers = [];
    }
    return obj;
  },
};

export const GetCoverRequest = {
  encode(message: GetCoverRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): GetCoverRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseGetCoverRequest) as GetCoverRequest;
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
  fromJSON(object: any): GetCoverRequest {
    const message = Object.create(baseGetCoverRequest) as GetCoverRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetCoverRequest>): GetCoverRequest {
    const message = Object.create(baseGetCoverRequest) as GetCoverRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: GetCoverRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    return obj;
  },
};

export const CreateCoverRequest = {
  encode(message: CreateCoverRequest, writer: Writer = Writer.create()): Writer {
    if (message.cover !== undefined && message.cover !== undefined) {
      Cover.encode(message.cover, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): CreateCoverRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreateCoverRequest) as CreateCoverRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cover = Cover.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateCoverRequest {
    const message = Object.create(baseCreateCoverRequest) as CreateCoverRequest;
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = Cover.fromJSON(object.cover);
    } else {
      message.cover = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateCoverRequest>): CreateCoverRequest {
    const message = Object.create(baseCreateCoverRequest) as CreateCoverRequest;
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = Cover.fromPartial(object.cover);
    } else {
      message.cover = undefined;
    }
    return message;
  },
  toJSON(message: CreateCoverRequest): unknown {
    const obj: any = {};
    obj.cover = message.cover ? Cover.toJSON(message.cover) : undefined;
    return obj;
  },
};

export const UpdateCoverRequest = {
  encode(message: UpdateCoverRequest, writer: Writer = Writer.create()): Writer {
    if (message.cover !== undefined && message.cover !== undefined) {
      Cover.encode(message.cover, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): UpdateCoverRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUpdateCoverRequest) as UpdateCoverRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cover = Cover.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateCoverRequest {
    const message = Object.create(baseUpdateCoverRequest) as UpdateCoverRequest;
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = Cover.fromJSON(object.cover);
    } else {
      message.cover = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateCoverRequest>): UpdateCoverRequest {
    const message = Object.create(baseUpdateCoverRequest) as UpdateCoverRequest;
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = Cover.fromPartial(object.cover);
    } else {
      message.cover = undefined;
    }
    return message;
  },
  toJSON(message: UpdateCoverRequest): unknown {
    const obj: any = {};
    obj.cover = message.cover ? Cover.toJSON(message.cover) : undefined;
    return obj;
  },
};

export const DeleteCoverRequest = {
  encode(message: DeleteCoverRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): DeleteCoverRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseDeleteCoverRequest) as DeleteCoverRequest;
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
  fromJSON(object: any): DeleteCoverRequest {
    const message = Object.create(baseDeleteCoverRequest) as DeleteCoverRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteCoverRequest>): DeleteCoverRequest {
    const message = Object.create(baseDeleteCoverRequest) as DeleteCoverRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: DeleteCoverRequest): unknown {
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