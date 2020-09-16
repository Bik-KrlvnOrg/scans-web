import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateMembersCommand } from './command';
import {  Register } from 'src/_proto/register';

@Injectable()
export class MembershipService {
    constructor(private readonly commandBus: CommandBus) { }

    async createMembership(data: Register) {
        const result = await this.commandBus.execute(new CreateMembersCommand(data));
        return result
    }
}
