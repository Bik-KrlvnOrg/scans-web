import { Inject, OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientGrpc } from '@nestjs/microservices';
import { IGroupRpcService } from 'src/interface/register-service.interface';
import { PROVIDERS } from 'src/libs';
import { FindGroupInput, GroupInput } from './groups.input';
import { GroupSuccessType, GroupType } from './groups.type';

@Resolver()
export class GroupsResolver implements OnModuleInit {
    constructor(@Inject(PROVIDERS.REGISTER_CLIENT) private readonly client: ClientGrpc) { }
    private groupService: IGroupRpcService

    onModuleInit() {
        this.groupService = this.client.getService<IGroupRpcService>('GroupService')
    }

    @Mutation(returns => GroupSuccessType)
    async createGroup(@Args('input') req: GroupInput) {
        const result = await this.groupService.createGroup(req).toPromise()
        return result
    }

    @Query(returns => GroupType)
    async group(@Args('input') req: FindGroupInput) {
        const result = await this.groupService.getGroup(req).toPromise()
        return result
    }

    @Query(returns => [GroupType])
    async listGroups() {
        const result = await this.groupService.listGroups(null).toPromise()
        return result.groups
    }

}
