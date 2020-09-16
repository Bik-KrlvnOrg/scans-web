import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { GroupRepository } from "src/groups/repository/group.repository";
import { Group, ListGroupsResponse } from "src/_proto/register";
import { GetGroupsQuery } from "../impl";

@QueryHandler(GetGroupsQuery)
export class GetGroupsHandler implements IQueryHandler<GetGroupsQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(GroupRepository)
        private readonly groupRepository: GroupRepository,
    ) { }

    async execute(query: GetGroupsQuery): Promise<ListGroupsResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const groups = await this.groupRepository.find({})
            return { groups }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code: 500, message: err.message })
        }
    }

}