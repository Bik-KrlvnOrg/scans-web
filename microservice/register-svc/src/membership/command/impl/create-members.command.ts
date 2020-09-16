import { ICommand } from "@nestjs/cqrs";
import { Register } from "src/_proto/register";

export class CreateMembersCommand implements ICommand {
    constructor(public readonly cmd: Register) { }
}