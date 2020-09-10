/* eslint-disable */
import { Observable } from 'rxjs';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Register {
  type: string;
  members: Member[];
  sponsor: Sponsor | undefined;
}

export interface RegisterSuccessResponse {
  success: boolean;
}

export interface Member {
  id: string;
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
  id: string;
  name: string;
  relationship: string;
  contact: string;
  email: string;
  password: string;
  residentialAddress: string;
  postalAddress: string;
}

export interface Benefit {
  benefitId: string;
  title: string;
}

export interface MedicalHistory {
  medicals: Medical[];
}

export interface ListRegistersRequest {
}

export interface ListRegistersResponse {
  registers: Register[];
}

export interface GetRegisterRequest {
  id: string;
}

export interface CreateRegisterRequest {
  register: Register | undefined;
}

export interface UpdateRegisterRequest {
  register: Register | undefined;
}

export interface DeleteRegisterRequest {
  id: string;
}

export interface Medical {
  id: string;
  name: string;
  value: number;
}

export interface MedicalSuccessResponse {
  success: boolean;
}

export interface ListMedicalsRequest {
}

export interface ListMedicalsResponse {
  medicals: Medical[];
}

export interface GetMedicalRequest {
  id: string;
}

export interface CreateMedicalRequest {
  medicals: Medical[];
}

export interface UpdateMedicalRequest {
  medical: Medical | undefined;
}

export interface DeleteMedicalRequest {
  id: string;
}

const baseRegister: object = {
  type: '',
  members: undefined,
  sponsor: undefined,
};

const baseRegisterSuccessResponse: object = {
  success: false,
};

const baseMember: object = {
  id: '',
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
  id: '',
  name: '',
  relationship: '',
  contact: '',
  email: '',
  password: '',
  residentialAddress: '',
  postalAddress: '',
};

const baseBenefit: object = {
  benefitId: '',
  title: '',
};

const baseMedicalHistory: object = {
  medicals: undefined,
};

const baseListRegistersRequest: object = {
};

const baseListRegistersResponse: object = {
  registers: undefined,
};

const baseGetRegisterRequest: object = {
  id: '',
};

const baseCreateRegisterRequest: object = {
  register: undefined,
};

const baseUpdateRegisterRequest: object = {
  register: undefined,
};

const baseDeleteRegisterRequest: object = {
  id: '',
};

const baseMedical: object = {
  id: '',
  name: '',
  value: 0,
};

const baseMedicalSuccessResponse: object = {
  success: false,
};

const baseListMedicalsRequest: object = {
};

const baseListMedicalsResponse: object = {
  medicals: undefined,
};

const baseGetMedicalRequest: object = {
  id: '',
};

const baseCreateMedicalRequest: object = {
  medicals: undefined,
};

const baseUpdateMedicalRequest: object = {
  medical: undefined,
};

const baseDeleteMedicalRequest: object = {
  id: '',
};

/**
 *  Generated according to https://cloud.google.com/apis/design/standard_methods
 */
export interface RegisterService<Context extends DataLoaders> {

  listRegisters(request: ListRegistersRequest, ctx: Context): Promise<ListRegistersResponse>;

  getRegister(request: GetRegisterRequest, ctx: Context): Promise<Register>;

  createRegister(request: CreateRegisterRequest, ctx: Context): Promise<RegisterSuccessResponse>;

  updateRegister(request: UpdateRegisterRequest, ctx: Context): Promise<RegisterSuccessResponse>;

  deleteRegister(request: DeleteRegisterRequest, ctx: Context): Promise<RegisterSuccessResponse>;

}

/**
 *  Generated according to https://cloud.google.com/apis/design/standard_methods
 */
export interface RegisterServiceClient<Context extends DataLoaders> {

  listRegisters(request: ListRegistersRequest, ctx?: Context): Observable<ListRegistersResponse>;

  getRegister(request: GetRegisterRequest, ctx?: Context): Observable<Register>;

  createRegister(request: CreateRegisterRequest, ctx?: Context): Observable<RegisterSuccessResponse>;

  updateRegister(request: UpdateRegisterRequest, ctx?: Context): Observable<RegisterSuccessResponse>;

  deleteRegister(request: DeleteRegisterRequest, ctx?: Context): Observable<RegisterSuccessResponse>;

}

export interface MedicalService<Context extends DataLoaders> {

  listMedicals(request: ListMedicalsRequest, ctx: Context): Promise<ListMedicalsResponse>;

  getMedical(request: GetMedicalRequest, ctx: Context): Promise<Medical>;

  createMedical(request: CreateMedicalRequest, ctx: Context): Promise<MedicalSuccessResponse>;

  updateMedical(request: UpdateMedicalRequest, ctx: Context): Promise<MedicalSuccessResponse>;

  deleteMedical(request: DeleteMedicalRequest, ctx: Context): Promise<MedicalSuccessResponse>;

}

export interface MedicalServiceClient<Context extends DataLoaders> {

  listMedicals(request: ListMedicalsRequest, ctx?: Context): Observable<ListMedicalsResponse>;

  getMedical(request: GetMedicalRequest, ctx?: Context): Observable<Medical>;

  createMedical(request: CreateMedicalRequest, ctx?: Context): Observable<MedicalSuccessResponse>;

  updateMedical(request: UpdateMedicalRequest, ctx?: Context): Observable<MedicalSuccessResponse>;

  deleteMedical(request: DeleteMedicalRequest, ctx?: Context): Observable<MedicalSuccessResponse>;

}

interface DataLoaders {

  getDataLoader<T>(identifier: string, constructorFn: () => T): T;

}

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

export const RegisterSuccessResponse = {
  encode(message: RegisterSuccessResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).bool(message.success);
    return writer;
  },
  decode(reader: Reader, length?: number): RegisterSuccessResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseRegisterSuccessResponse) as RegisterSuccessResponse;
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
  fromJSON(object: any): RegisterSuccessResponse {
    const message = Object.create(baseRegisterSuccessResponse) as RegisterSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterSuccessResponse>): RegisterSuccessResponse {
    const message = Object.create(baseRegisterSuccessResponse) as RegisterSuccessResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
  toJSON(message: RegisterSuccessResponse): unknown {
    const obj: any = {};
    obj.success = message.success || false;
    return obj;
  },
};

export const Member = {
  encode(message: Member, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.firstname);
    writer.uint32(26).string(message.lastname);
    writer.uint32(34).string(message.dob);
    writer.uint32(42).string(message.gender);
    writer.uint32(50).string(message.contact);
    writer.uint32(58).string(message.email);
    writer.uint32(66).string(message.relationship);
    writer.uint32(74).string(message.residentialAddress);
    if (message.benefit !== undefined && message.benefit !== undefined) {
      Benefit.encode(message.benefit, writer.uint32(82).fork()).ldelim();
    }
    if (message.medicalHistory !== undefined && message.medicalHistory !== undefined) {
      MedicalHistory.encode(message.medicalHistory, writer.uint32(90).fork()).ldelim();
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
          message.id = reader.string();
          break;
        case 2:
          message.firstname = reader.string();
          break;
        case 3:
          message.lastname = reader.string();
          break;
        case 4:
          message.dob = reader.string();
          break;
        case 5:
          message.gender = reader.string();
          break;
        case 6:
          message.contact = reader.string();
          break;
        case 7:
          message.email = reader.string();
          break;
        case 8:
          message.relationship = reader.string();
          break;
        case 9:
          message.residentialAddress = reader.string();
          break;
        case 10:
          message.benefit = Benefit.decode(reader, reader.uint32());
          break;
        case 11:
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
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
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
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
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
    obj.id = message.id || '';
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
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.name);
    writer.uint32(26).string(message.relationship);
    writer.uint32(34).string(message.contact);
    writer.uint32(42).string(message.email);
    writer.uint32(50).string(message.password);
    writer.uint32(58).string(message.residentialAddress);
    writer.uint32(66).string(message.postalAddress);
    return writer;
  },
  decode(reader: Reader, length?: number): Sponsor {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseSponsor) as Sponsor;
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
          message.relationship = reader.string();
          break;
        case 4:
          message.contact = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.password = reader.string();
          break;
        case 7:
          message.residentialAddress = reader.string();
          break;
        case 8:
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
    obj.id = message.id || '';
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

export const ListRegistersRequest = {
  encode(message: ListRegistersRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(reader: Reader, length?: number): ListRegistersRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListRegistersRequest) as ListRegistersRequest;
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
  fromJSON(object: any): ListRegistersRequest {
    const message = Object.create(baseListRegistersRequest) as ListRegistersRequest;
    return message;
  },
  fromPartial(object: DeepPartial<ListRegistersRequest>): ListRegistersRequest {
    const message = Object.create(baseListRegistersRequest) as ListRegistersRequest;
    return message;
  },
  toJSON(message: ListRegistersRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const ListRegistersResponse = {
  encode(message: ListRegistersResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.registers) {
      Register.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): ListRegistersResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListRegistersResponse) as ListRegistersResponse;
    message.registers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registers.push(Register.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListRegistersResponse {
    const message = Object.create(baseListRegistersResponse) as ListRegistersResponse;
    message.registers = [];
    if (object.registers !== undefined && object.registers !== null) {
      for (const e of object.registers) {
        message.registers.push(Register.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListRegistersResponse>): ListRegistersResponse {
    const message = Object.create(baseListRegistersResponse) as ListRegistersResponse;
    message.registers = [];
    if (object.registers !== undefined && object.registers !== null) {
      for (const e of object.registers) {
        message.registers.push(Register.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListRegistersResponse): unknown {
    const obj: any = {};
    if (message.registers) {
      obj.registers = message.registers.map(e => e ? Register.toJSON(e) : undefined);
    } else {
      obj.registers = [];
    }
    return obj;
  },
};

export const GetRegisterRequest = {
  encode(message: GetRegisterRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): GetRegisterRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseGetRegisterRequest) as GetRegisterRequest;
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
  fromJSON(object: any): GetRegisterRequest {
    const message = Object.create(baseGetRegisterRequest) as GetRegisterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetRegisterRequest>): GetRegisterRequest {
    const message = Object.create(baseGetRegisterRequest) as GetRegisterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: GetRegisterRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
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

export const UpdateRegisterRequest = {
  encode(message: UpdateRegisterRequest, writer: Writer = Writer.create()): Writer {
    if (message.register !== undefined && message.register !== undefined) {
      Register.encode(message.register, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): UpdateRegisterRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUpdateRegisterRequest) as UpdateRegisterRequest;
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
  fromJSON(object: any): UpdateRegisterRequest {
    const message = Object.create(baseUpdateRegisterRequest) as UpdateRegisterRequest;
    if (object.register !== undefined && object.register !== null) {
      message.register = Register.fromJSON(object.register);
    } else {
      message.register = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateRegisterRequest>): UpdateRegisterRequest {
    const message = Object.create(baseUpdateRegisterRequest) as UpdateRegisterRequest;
    if (object.register !== undefined && object.register !== null) {
      message.register = Register.fromPartial(object.register);
    } else {
      message.register = undefined;
    }
    return message;
  },
  toJSON(message: UpdateRegisterRequest): unknown {
    const obj: any = {};
    obj.register = message.register ? Register.toJSON(message.register) : undefined;
    return obj;
  },
};

export const DeleteRegisterRequest = {
  encode(message: DeleteRegisterRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): DeleteRegisterRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseDeleteRegisterRequest) as DeleteRegisterRequest;
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
  fromJSON(object: any): DeleteRegisterRequest {
    const message = Object.create(baseDeleteRegisterRequest) as DeleteRegisterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteRegisterRequest>): DeleteRegisterRequest {
    const message = Object.create(baseDeleteRegisterRequest) as DeleteRegisterRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: DeleteRegisterRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
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

export const ListMedicalsRequest = {
  encode(message: ListMedicalsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(reader: Reader, length?: number): ListMedicalsRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListMedicalsRequest) as ListMedicalsRequest;
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
  fromJSON(object: any): ListMedicalsRequest {
    const message = Object.create(baseListMedicalsRequest) as ListMedicalsRequest;
    return message;
  },
  fromPartial(object: DeepPartial<ListMedicalsRequest>): ListMedicalsRequest {
    const message = Object.create(baseListMedicalsRequest) as ListMedicalsRequest;
    return message;
  },
  toJSON(message: ListMedicalsRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const ListMedicalsResponse = {
  encode(message: ListMedicalsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.medicals) {
      Medical.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): ListMedicalsResponse {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseListMedicalsResponse) as ListMedicalsResponse;
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
  fromJSON(object: any): ListMedicalsResponse {
    const message = Object.create(baseListMedicalsResponse) as ListMedicalsResponse;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(Medical.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListMedicalsResponse>): ListMedicalsResponse {
    const message = Object.create(baseListMedicalsResponse) as ListMedicalsResponse;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(Medical.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: ListMedicalsResponse): unknown {
    const obj: any = {};
    if (message.medicals) {
      obj.medicals = message.medicals.map(e => e ? Medical.toJSON(e) : undefined);
    } else {
      obj.medicals = [];
    }
    return obj;
  },
};

export const GetMedicalRequest = {
  encode(message: GetMedicalRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): GetMedicalRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseGetMedicalRequest) as GetMedicalRequest;
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
  fromJSON(object: any): GetMedicalRequest {
    const message = Object.create(baseGetMedicalRequest) as GetMedicalRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetMedicalRequest>): GetMedicalRequest {
    const message = Object.create(baseGetMedicalRequest) as GetMedicalRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: GetMedicalRequest): unknown {
    const obj: any = {};
    obj.id = message.id || '';
    return obj;
  },
};

export const CreateMedicalRequest = {
  encode(message: CreateMedicalRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.medicals) {
      Medical.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.medicals.push(Medical.decode(reader, reader.uint32()));
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
        message.medicals.push(Medical.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateMedicalRequest>): CreateMedicalRequest {
    const message = Object.create(baseCreateMedicalRequest) as CreateMedicalRequest;
    message.medicals = [];
    if (object.medicals !== undefined && object.medicals !== null) {
      for (const e of object.medicals) {
        message.medicals.push(Medical.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CreateMedicalRequest): unknown {
    const obj: any = {};
    if (message.medicals) {
      obj.medicals = message.medicals.map(e => e ? Medical.toJSON(e) : undefined);
    } else {
      obj.medicals = [];
    }
    return obj;
  },
};

export const UpdateMedicalRequest = {
  encode(message: UpdateMedicalRequest, writer: Writer = Writer.create()): Writer {
    if (message.medical !== undefined && message.medical !== undefined) {
      Medical.encode(message.medical, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(reader: Reader, length?: number): UpdateMedicalRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseUpdateMedicalRequest) as UpdateMedicalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.medical = Medical.decode(reader, reader.uint32());
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
    if (object.medical !== undefined && object.medical !== null) {
      message.medical = Medical.fromJSON(object.medical);
    } else {
      message.medical = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateMedicalRequest>): UpdateMedicalRequest {
    const message = Object.create(baseUpdateMedicalRequest) as UpdateMedicalRequest;
    if (object.medical !== undefined && object.medical !== null) {
      message.medical = Medical.fromPartial(object.medical);
    } else {
      message.medical = undefined;
    }
    return message;
  },
  toJSON(message: UpdateMedicalRequest): unknown {
    const obj: any = {};
    obj.medical = message.medical ? Medical.toJSON(message.medical) : undefined;
    return obj;
  },
};

export const DeleteMedicalRequest = {
  encode(message: DeleteMedicalRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): DeleteMedicalRequest {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseDeleteMedicalRequest) as DeleteMedicalRequest;
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
  fromJSON(object: any): DeleteMedicalRequest {
    const message = Object.create(baseDeleteMedicalRequest) as DeleteMedicalRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = '';
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteMedicalRequest>): DeleteMedicalRequest {
    const message = Object.create(baseDeleteMedicalRequest) as DeleteMedicalRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = '';
    }
    return message;
  },
  toJSON(message: DeleteMedicalRequest): unknown {
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