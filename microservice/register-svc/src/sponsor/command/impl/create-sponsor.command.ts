import { ICommand } from "@nestjs/cqrs";
import { CreateRegisterRequest } from "src/_proto/register";
import { MemberEntity } from "src/membership/entity/member.entity";

export class CreateSponsorCommand implements ICommand {
    constructor(public readonly req: CreateRegisterRequest,public readonly members: MemberEntity[]) { }
}