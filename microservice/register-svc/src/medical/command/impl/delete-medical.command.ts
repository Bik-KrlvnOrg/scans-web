import { ICommand } from "@nestjs/cqrs";
import { FindMedialsRequest } from "src/_proto/register";

export class DeleteMedicalCommand implements ICommand {
    constructor(public readonly cmd: FindMedialsRequest) { }
}