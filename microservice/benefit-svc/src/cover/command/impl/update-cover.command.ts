import { ICommand } from '@nestjs/cqrs'
import { Cover } from 'src/_proto/benefit';

export class UpdateCoverCommand implements ICommand {
    constructor(public readonly cmd: Cover) { }
}