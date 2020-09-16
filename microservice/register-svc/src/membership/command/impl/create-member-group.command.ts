import { ICommand } from '@nestjs/cqrs'
import { Register } from 'src/_proto/register';

export class CreateMemberGroupCommand implements ICommand {
    constructor(public readonly cmd: Register) { }
}