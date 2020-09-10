import { IEvent } from "@nestjs/cqrs";
import { MemberEntity } from "../../entity/member.entity";
import { CreateRegisterRequest } from "src/_proto/register";

export class MembersCreatedEvent implements IEvent {
    constructor(
        public readonly data: MemberEntity[],
        public readonly req: CreateRegisterRequest) { }
}