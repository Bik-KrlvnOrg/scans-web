import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { GroupRepository } from "src/groups/repository/group.repository";
import { Group } from "src/_proto/register";
import { GetGroupQuery } from "../impl";

@QueryHandler(GetGroupQuery)
export class GetGroupHandler implements IQueryHandler<GetGroupQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(GroupRepository)
        private readonly groupRepository: GroupRepository,
    ) { }

    async execute(query: GetGroupQuery): Promise<Group> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const group = await this.groupRepository.findOne({ where: { id: request } })
            if (!group) throw new RpcException({ code: 404, message: 'group not found' })
            return group
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }

}