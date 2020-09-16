import { ICommand } from "@nestjs/cqrs";
import { CreateRegisterRequest, Register } from "src/_proto/register";

export class CreateSponsorCommand implements ICommand {
    constructor(public readonly req: Register) { }
}