import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateGroupRequest, DeleteGroupRequest, GetGroupRequest, Group, GroupSuccessResponse, ListGroupsRequest, ListGroupsResponse, UpdateGroupRequest } from 'src/_proto/register';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupService: GroupsService) { }

    @GrpcMethod('GroupService', 'CreateGroup')
    async createGroup(req: CreateGroupRequest): Promise<GroupSuccessResponse> {
        return this.groupService.createGroup(req.group)
    }

    @GrpcMethod('GroupService', 'UpdateGroup')
    async updateGroup(req: UpdateGroupRequest): Promise<GroupSuccessResponse> {
        return this.groupService.updateGroup(req.group)
    }

    @GrpcMethod('GroupService', 'DeleteGroup')
    async deleteGroup(req: DeleteGroupRequest): Promise<GroupSuccessResponse> {
        return this.groupService.deleteGroup(req.id)
    }

    @GrpcMethod('GroupService', 'GetGroup')
    async getGroup(req: GetGroupRequest): Promise<Group> {
        return this.groupService.getGroup(req.id)
    }

    @GrpcMethod('GroupService', 'ListGroups')
    async listGroups(req: ListGroupsRequest): Promise<ListGroupsResponse> {
        return this.groupService.getGroups(req)
    }
}
