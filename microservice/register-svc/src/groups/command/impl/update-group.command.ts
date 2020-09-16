import { ICommand } from '@nestjs/cqrs'
import { Group } from 'src/_proto/register';
export class UpdateGroupCommand implements ICommand {
    constructor(public readonly cmd: Group) { }
}