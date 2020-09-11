import { ICommand } from '@nestjs/cqrs'
import { User } from 'src/_proto/user';

export class UpdateUserCommand implements ICommand {
    constructor(public readonly cmd: User) { }
}