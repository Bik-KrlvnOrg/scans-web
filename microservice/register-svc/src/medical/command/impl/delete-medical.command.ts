import { ICommand } from "@nestjs/cqrs";

export class DeleteMedicalCommand implements ICommand {
    constructor(public readonly cmd: string) { }
}