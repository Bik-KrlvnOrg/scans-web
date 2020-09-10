import { ICommand } from "@nestjs/cqrs";
import { CreateRegisterRequest } from "src/_proto/register";

export class CreateMembersCommand implements ICommand{
    constructor(public readonly cmd:CreateRegisterRequest){}
}