import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand, UpdateUserCommand } from './command';
import { User } from 'src/_proto/user';

@Injectable()
export class UserService {
    constructor(private readonly commandBus: CommandBus) { }

    async createUser(data: User) {
        return await this.commandBus.execute(new CreateUserCommand(data))
    }

    async updateUser(data: User) {
        return await this.commandBus.execute(new UpdateUserCommand(data))
    }
}
