import { ICommand } from '@nestjs/cqrs'
export class DeleteGroupCommand implements ICommand {
    constructor(public readonly cmd: string) { }
}