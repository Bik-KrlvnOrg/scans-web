import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Group } from 'src/_proto/register';
import { CreateGroupCommand, UpdateGroupCommand } from './command';
import { DeleteGroupCommand } from './command/impl/delete-group.command';
import { GetGroupQuery, GetGroupsQuery } from './query';

@Injectable()
export class GroupsService {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

    async createGroup(data: Group) {
        return await this.commandBus.execute(new CreateGroupCommand(data))
    }

    async updateGroup(data: Group) {
        return await this.commandBus.execute(new UpdateGroupCommand(data))
    }

    async deleteGroup(data: string) {
        return await this.commandBus.execute(new DeleteGroupCommand(data))
    }

    async getGroup(data: string) {
        return await this.queryBus.execute(new GetGroupQuery(data))
    }

    async getGroups(data: any) {
        return await this.queryBus.execute(new GetGroupsQuery(data))
    }
}
