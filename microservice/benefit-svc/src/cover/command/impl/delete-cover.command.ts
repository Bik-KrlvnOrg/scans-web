
import { ICommand } from '@nestjs/cqrs'

export class DeleteCoverCommand implements ICommand {
    constructor(public readonly cmd: string) { }
}