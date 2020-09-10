/* eslint-disable */
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


export interface CreateMedicalRequest {
  medicals: MedicalInput[];
}

export interface UpdateMedicalRequest {
  id: string;
  name: string;
  value: string;
}

export interface MedicalSuccessResponse {
  success: boolean;
}

export interface MedicalInput {
  name: string;
  value: string;
}

export interface MedicalResponse {
  id: string;
  name: string;
  value: string;
}

export interface ListMedicalResponse {
  medicals: MedicalResponse[];
}

export interface FindMedialsRequest {
  id: string;
}

export interface Register {
  type: string;
  members: Member[];
  sponsor: Sponsor | undefined;
}

export interface Member {
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  contact: string;
  email: string;
  relationship: string;
  residentialAddress: string;
  benefit: Benefit | undefined;
  medicalHistory: MedicalHistory | undefined;
}

export interface Sponsor {
  name: string;
  relationship: string;
  contact: string;
  email: string;
  password: string;
  residentialAddress: string;
  postalAddress: string;
}

export interface Medical {
  id: string;
  name: string;
  value: number;
}

export interface MedicalHistory {
  medicals: Medical[];
}

export interface Benefit {
  benefitId: string;
  title: string;
}

export interface CreateRegisterRequest {
  register: Register | undefined;
}

export interface RegisterResponse {
  activiationLink: string;
}

const baseCreateMedicalRequest: object = {
  medicals: undefined,
};

const baseUpdateMedicalRequest: object = {
  id: '',
  name: '',
  value: '',
};

const baseMedicalSuccessResponse: object = {
  success: false,
};

const baseMedicalInput: object = {
  name: '',
  value: '',
};

const baseMedicalResponse: object = {
  id: '',
  name: '',
  value: '',
};

const baseListMedicalResponse: object = {
  medicals: undefined,
};

const baseFindMedialsRequest: object = {
  id: '',
};

const baseRegister: object = {
  type: '',
  members: undefined,
  sponsor: undefined,
};

const baseMember: object = {
  firstname: '',
  lastname: '',
  dob: '',
  gender: '',
  contact: '',
  email: '',
  relationship: '',
  residentialAddress: '',
  benefit: undefined,
  medicalHistory: undefined,
};

const baseSponsor: object = {
  name: '',
  relationship: '',
  contact: '',
  email: '',
  password: '',
  residentialAddress: '',
  postalAddress: '',
};

const baseMedical: object = {
  id: '',
  name: '',
  value: 0,
};

const baseMedicalHistory: object = {
  medicals: undefined,
};

const baseBenefit: object = {
  benefitId: '',
  title: '',
};

const baseCreateRegisterRequest: object = {
  register: undefined,
};

const baseRegisterResponse: object = {
  activiationLink: '',
};

export interface RegisterService<Context extends DataLoaders> {

  createRegister(request: CreateRegisterRequest, ctx: Context): Promise<RegisterResponse>;

}

export interface RegisterServiceClient<Context extends DataLoaders> {

  createRegister(request: CreateRegisterRequest, ctx?: Context): Observable<RegisterResponse>;

}

export interface MedicalService<Context extends DataLoaders> {

  createMedical(request: CreateMedicalRequest, ctx: Context): Promise<MedicalSuccessResponse>;

  getMedicals(request: FindMedialsRequest, ctx: Context): Promise<ListMedicalResponse>;

  deleteMedical(request: FindMedialsRequest, ctx: Context): Promise<MedicalSuccessResponse>;

  updateMedical(request: UpdateMedicalRequest, ctx: Context): Promise<MedicalSuccessResponse>;

}

export interface MedicalServiceClient<Context extends DataLoaders> {

  createMedical(request: CreateMedicalRequest, ctx?: Context): Observable<MedicalSuccessResponse>;

  getMedicals(request: FindMedialsRequest, ctx?: Context): Observable<ListMedicalResponse>;

  deleteMedical(request: FindMedialsRequest, ctx?: Context): Observable<MedicalSuccessResponse>;

  updateMedical(request: UpdateMedicalRequest, ctx?: Context): Observable<MedicalSuccessResponse>;

}

interface DataLoaders {

  getDataLoader<T>(identifier: string, constructorFn: () => T): T;

}

export const CreateMedicalRequest = {
  encode(message: CreateMedicalRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.medicals) {
      MedicalInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): CreateMedicalRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreateMedicalRequest) as CreateMedicalRequest;
    message.medicals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.medicals.push(MedicalInput.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateMedicalRequest {
    const message = Object.create(baseCreateMedicalRequest) as CreateMedicalRequest;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(MedicalInput.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateMedicalRequest>): CreateMedicalRequest {
    const message = Object.create(baseCreateMedicalRequest) as CreateMedicalRequest;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(MedicalInput.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CreateMedicalRequest): unknown {
    const obj: any = {};
    if (message.medicals) {
      obj.medicals = message.medicals.map(e => e ? MedicalInput.toJSON(e) : undefined);
    } else {
      obj.medicals = [];
    }
    return obj;
  },
};

export const UpdateMedicalRequest = {
  encode(message: UpdateMedicalRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.value);
    return writer;
  },
  decode(reader: Reader, length?: number): UpdateMedicalRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUpdateMedicalRequest) as UpdateMedicalRequest;
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
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateMedicalRequest {
    const message = Object.create(baseUpdateMedicalRequest) as UpdateMedicalRequest;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateMedicalRequest>): UpdateMedicalRequest {
    const message = Object.create(baseUpdateMedicalRequest) as UpdateMedicalRequest;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = '';
    }
    return message;
  },
  toJSON(message: UpdateMedicalRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.name = message.name || '';
    obj.value = message.value || '';
    return obj;
  },
};

export const MedicalSuccessResponse = {
  encode(message: MedicalSuccessResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.success);
    return writer;
  },
  decode(reader: Reader, length?: number): MedicalSuccessResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMedicalSuccessResponse) as MedicalSuccessResponse;
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
  fromJSON(object: any): MedicalSuccessResponse {
    const message = Object.create(baseMedicalSuccessResponse) as MedicalSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MedicalSuccessResponse>): MedicalSuccessResponse {
    const message = Object.create(baseMedicalSuccessResponse) as MedicalSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
  toJSON(message: MedicalSuccessResponse): unknown {
    const obj: any = {};
    obj.success = message.success || false;
    return obj;
  },
};

export const MedicalInput = {
  encode(message: MedicalInput, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.value);
    return writer;
  },
  decode(reader: Reader, length?: number): MedicalInput {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMedicalInput) as MedicalInput;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MedicalInput {
    const message = Object.create(baseMedicalInput) as MedicalInput;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<MedicalInput>): MedicalInput {
    const message = Object.create(baseMedicalInput) as MedicalInput;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = '';
    }
    return message;
  },
  toJSON(message: MedicalInput): unknown {
    const obj: any = {};
    obj.name = message.name || '';
    obj.value = message.value || '';
    return obj;
  },
};

export const MedicalResponse = {
  encode(message: MedicalResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.value);
    return writer;
  },
  decode(reader: Reader, length?: number): MedicalResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMedicalResponse) as MedicalResponse;
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
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MedicalResponse {
    const message = Object.create(baseMedicalResponse) as MedicalResponse;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<MedicalResponse>): MedicalResponse {
    const message = Object.create(baseMedicalResponse) as MedicalResponse;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = '';
    }
    return message;
  },
  toJSON(message: MedicalResponse): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.name = message.name || '';
    obj.value = message.value || '';
    return obj;
  },
};

export const ListMedicalResponse = {
  encode(message: ListMedicalResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.medicals) {
      MedicalResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): ListMedicalResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListMedicalResponse) as ListMedicalResponse;
    message.medicals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.medicals.push(MedicalResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListMedicalResponse {
    const message = Object.create(baseListMedicalResponse) as ListMedicalResponse;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(MedicalResponse.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListMedicalResponse>): ListMedicalResponse {
    const message = Object.create(baseListMedicalResponse) as ListMedicalResponse;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(MedicalResponse.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListMedicalResponse): unknown {
    const obj: any = {};
    if (message.medicals) {
      obj.medicals = message.medicals.map(e => e ? MedicalResponse.toJSON(e) : undefined);
    } else {
      obj.medicals = [];
    }
    return obj;
  },
};

export const FindMedialsRequest = {
  encode(message: FindMedialsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): FindMedialsRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseFindMedialsRequest) as FindMedialsRequest;
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
  fromJSON(object: any): FindMedialsRequest {
    const message = Object.create(baseFindMedialsRequest) as FindMedialsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindMedialsRequest>): FindMedialsRequest {
    const message = Object.create(baseFindMedialsRequest) as FindMedialsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: FindMedialsRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    return obj;
  },
};

export const Register = {
  encode(message: Register, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.type);
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.sponsor !== undefined && message.sponsor !== undefined) {
      Sponsor.encode(message.sponsor, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): Register {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseRegister) as Register;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sponsor = Sponsor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Register {
    const message = Object.create(baseRegister) as Register;
    message.members = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = '';
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(Member.fromJSON(e));
      }
    }
    if (object.sponsor !== undefined && object.sponsor !== null) {
      message.sponsor = Sponsor.fromJSON(object.sponsor);
    } else {
      message.sponsor = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Register>): Register {
    const message = Object.create(baseRegister) as Register;
    message.members = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = '';
    }
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(Member.fromPartial(e));
      }
    }
    if (object.sponsor !== undefined && object.sponsor !== null) {
      message.sponsor = Sponsor.fromPartial(object.sponsor);
    } else {
      message.sponsor = undefined;
    }
    return message;
  },
  toJSON(message: Register): unknown {
    const obj: any = {};
    obj.type = message.type || '';
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.sponsor = message.sponsor ? Sponsor.toJSON(message.sponsor) : undefined;
    return obj;
  },
};

export const Member = {
  encode(message: Member, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.firstname);
    writer.uint32(18).string(message.lastname);
    writer.uint32(26).string(message.dob);
    writer.uint32(34).string(message.gender);
    writer.uint32(42).string(message.contact);
    writer.uint32(50).string(message.email);
    writer.uint32(58).string(message.relationship);
    writer.uint32(66).string(message.residentialAddress);
    if (message.benefit !== undefined && message.benefit !== undefined) {
      Benefit.encode(message.benefit, writer.uint32(74).fork()).ldelim();
    }
    if (message.medicalHistory !== undefined && message.medicalHistory !== undefined) {
      MedicalHistory.encode(message.medicalHistory, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): Member {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMember) as Member;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstname = reader.string();
          break;
        case 2:
          message.lastname = reader.string();
          break;
        case 3:
          message.dob = reader.string();
          break;
        case 4:
          message.gender = reader.string();
          break;
        case 5:
          message.contact = reader.string();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.relationship = reader.string();
          break;
        case 8:
          message.residentialAddress = reader.string();
          break;
        case 9:
          message.benefit = Benefit.decode(reader, reader.uint32());
          break;
        case 10:
          message.medicalHistory = MedicalHistory.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Member {
    const message = Object.create(baseMember) as Member;
    if (object.firstname !== undefined && object.firstname !== null) {
      message.firstname = String(object.firstname);
    } else {
      message.firstname = '';
    }
    if (object.lastname !== undefined && object.lastname !== null) {
      message.lastname = String(object.lastname);
    } else {
      message.lastname = '';
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = String(object.dob);
    } else {
      message.dob = '';
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = String(object.gender);
    } else {
      message.gender = '';
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = String(object.contact);
    } else {
      message.contact = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = '';
    }
    if (object.relationship !== undefined && object.relationship !== null) {
      message.relationship = String(object.relationship);
    } else {
      message.relationship = '';
    }
    if (object.residentialAddress !== undefined && object.residentialAddress !== null) {
      message.residentialAddress = String(object.residentialAddress);
    } else {
      message.residentialAddress = '';
    }
    if (object.benefit !== undefined && object.benefit !== null) {
      message.benefit = Benefit.fromJSON(object.benefit);
    } else {
      message.benefit = undefined;
    }
    if (object.medicalHistory !== undefined && object.medicalHistory !== null) {
      message.medicalHistory = MedicalHistory.fromJSON(object.medicalHistory);
    } else {
      message.medicalHistory = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Member>): Member {
    const message = Object.create(baseMember) as Member;
    if (object.firstname !== undefined && object.firstname !== null) {
      message.firstname = object.firstname;
    } else {
      message.firstname = '';
    }
    if (object.lastname !== undefined && object.lastname !== null) {
      message.lastname = object.lastname;
    } else {
      message.lastname = '';
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = object.dob;
    } else {
      message.dob = '';
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = '';
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    } else {
      message.contact = '';
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = '';
    }
    if (object.relationship !== undefined && object.relationship !== null) {
      message.relationship = object.relationship;
    } else {
      message.relationship = '';
    }
    if (object.residentialAddress !== undefined && object.residentialAddress !== null) {
      message.residentialAddress = object.residentialAddress;
    } else {
      message.residentialAddress = '';
    }
    if (object.benefit !== undefined && object.benefit !== null) {
      message.benefit = Benefit.fromPartial(object.benefit);
    } else {
      message.benefit = undefined;
    }
    if (object.medicalHistory !== undefined && object.medicalHistory !== null) {
      message.medicalHistory = MedicalHistory.fromPartial(object.medicalHistory);
    } else {
      message.medicalHistory = undefined;
    }
    return message;
  },
  toJSON(message: Member): unknown {
    const obj: any = {};
    obj.firstname = message.firstname || '';
    obj.lastname = message.lastname || '';
    obj.dob = message.dob || '';
    obj.gender = message.gender || '';
    obj.contact = message.contact || '';
    obj.email = message.email || '';
    obj.relationship = message.relationship || '';
    obj.residentialAddress = message.residentialAddress || '';
    obj.benefit = message.benefit ? Benefit.toJSON(message.benefit) : undefined;
    obj.medicalHistory = message.medicalHistory ? MedicalHistory.toJSON(message.medicalHistory) : undefined;
    return obj;
  },
};

export const Sponsor = {
  encode(message: Sponsor, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.name);
    writer.uint32(18).string(message.relationship);
    writer.uint32(26).string(message.contact);
    writer.uint32(34).string(message.email);
    writer.uint32(42).string(message.password);
    writer.uint32(50).string(message.residentialAddress);
    writer.uint32(58).string(message.postalAddress);
    return writer;
  },
  decode(reader: Reader, length?: number): Sponsor {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSponsor) as Sponsor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.relationship = reader.string();
          break;
        case 3:
          message.contact = reader.string();
          break;
        case 4:
          message.email = reader.string();
          break;
        case 5:
          message.password = reader.string();
          break;
        case 6:
          message.residentialAddress = reader.string();
          break;
        case 7:
          message.postalAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Sponsor {
    const message = Object.create(baseSponsor) as Sponsor;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.relationship !== undefined && object.relationship !== null) {
      message.relationship = String(object.relationship);
    } else {
      message.relationship = '';
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = String(object.contact);
    } else {
      message.contact = '';
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
    if (object.residentialAddress !== undefined && object.residentialAddress !== null) {
      message.residentialAddress = String(object.residentialAddress);
    } else {
      message.residentialAddress = '';
    }
    if (object.postalAddress !== undefined && object.postalAddress !== null) {
      message.postalAddress = String(object.postalAddress);
    } else {
      message.postalAddress = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<Sponsor>): Sponsor {
    const message = Object.create(baseSponsor) as Sponsor;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.relationship !== undefined && object.relationship !== null) {
      message.relationship = object.relationship;
    } else {
      message.relationship = '';
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    } else {
      message.contact = '';
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
    if (object.residentialAddress !== undefined && object.residentialAddress !== null) {
      message.residentialAddress = object.residentialAddress;
    } else {
      message.residentialAddress = '';
    }
    if (object.postalAddress !== undefined && object.postalAddress !== null) {
      message.postalAddress = object.postalAddress;
    } else {
      message.postalAddress = '';
    }
    return message;
  },
  toJSON(message: Sponsor): unknown {
    const obj: any = {};
    obj.name = message.name || '';
    obj.relationship = message.relationship || '';
    obj.contact = message.contact || '';
    obj.email = message.email || '';
    obj.password = message.password || '';
    obj.residentialAddress = message.residentialAddress || '';
    obj.postalAddress = message.postalAddress || '';
    return obj;
  },
};

export const Medical = {
  encode(message: Medical, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(25).double(message.value);
    return writer;
  },
  decode(reader: Reader, length?: number): Medical {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMedical) as Medical;
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
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Medical {
    const message = Object.create(baseMedical) as Medical;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<Medical>): Medical {
    const message = Object.create(baseMedical) as Medical;
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
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
  toJSON(message: Medical): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    obj.name = message.name || '';
    obj.value = message.value || 0;
    return obj;
  },
};

export const MedicalHistory = {
  encode(message: MedicalHistory, writer: Writer = Writer.create()): Writer {
    for (const v of message.medicals) {
      Medical.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): MedicalHistory {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMedicalHistory) as MedicalHistory;
    message.medicals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.medicals.push(Medical.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MedicalHistory {
    const message = Object.create(baseMedicalHistory) as MedicalHistory;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(Medical.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MedicalHistory>): MedicalHistory {
    const message = Object.create(baseMedicalHistory) as MedicalHistory;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(Medical.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MedicalHistory): unknown {
    const obj: any = {};
    if (message.medicals) {
      obj.medicals = message.medicals.map(e => e ? Medical.toJSON(e) : undefined);
    } else {
      obj.medicals = [];
    }
    return obj;
  },
};

export const Benefit = {
  encode(message: Benefit, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.benefitId);
    writer.uint32(18).string(message.title);
    return writer;
  },
  decode(reader: Reader, length?: number): Benefit {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseBenefit) as Benefit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.benefitId = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Benefit {
    const message = Object.create(baseBenefit) as Benefit;
    if (object.benefitId !== undefined && object.benefitId !== null) {
      message.benefitId = String(object.benefitId);
    } else {
      message.benefitId = '';
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<Benefit>): Benefit {
    const message = Object.create(baseBenefit) as Benefit;
    if (object.benefitId !== undefined && object.benefitId !== null) {
      message.benefitId = object.benefitId;
    } else {
      message.benefitId = '';
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = '';
    }
    return message;
  },
  toJSON(message: Benefit): unknown {
    const obj: any = {};
    obj.benefitId = message.benefitId || '';
    obj.title = message.title || '';
    return obj;
  },
};

export const CreateRegisterRequest = {
  encode(message: CreateRegisterRequest, writer: Writer = Writer.create()): Writer {
    if (message.register !== undefined && message.register !== undefined) {
      Register.encode(message.register, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): CreateRegisterRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseCreateRegisterRequest) as CreateRegisterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.register = Register.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateRegisterRequest {
    const message = Object.create(baseCreateRegisterRequest) as CreateRegisterRequest;
    if (object.register !== undefined && object.register !== null) {
      message.register = Register.fromJSON(object.register);
    } else {
      message.register = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateRegisterRequest>): CreateRegisterRequest {
    const message = Object.create(baseCreateRegisterRequest) as CreateRegisterRequest;
    if (object.register !== undefined && object.register !== null) {
      message.register = Register.fromPartial(object.register);
    } else {
      message.register = undefined;
    }
    return message;
  },
  toJSON(message: CreateRegisterRequest): unknown {
    const obj: any = {};
    obj.register = message.register ? Register.toJSON(message.register) : undefined;
    return obj;
  },
};

export const RegisterResponse = {
  encode(message: RegisterResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.activiationLink);
    return writer;
  },
  decode(reader: Reader, length?: number): RegisterResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseRegisterResponse) as RegisterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activiationLink = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisterResponse {
    const message = Object.create(baseRegisterResponse) as RegisterResponse;
    if (object.activiationLink !== undefined && object.activiationLink !== null) {
      message.activiationLink = String(object.activiationLink);
    } else {
      message.activiationLink = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterResponse>): RegisterResponse {
    const message = Object.create(baseRegisterResponse) as RegisterResponse;
    if (object.activiationLink !== undefined && object.activiationLink !== null) {
      message.activiationLink = object.activiationLink;
    } else {
      message.activiationLink = '';
    }
    return message;
  },
  toJSON(message: RegisterResponse): unknown {
    const obj: any = {};
    obj.activiationLink = message.activiationLink || '';
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