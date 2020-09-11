import { ICommand } from '@nestjs/cqrs'
import { User } from 'src/_proto/user';

export class CreateUserCommand implements ICommand {
    constructor(public readonly cmd: User) { }
}