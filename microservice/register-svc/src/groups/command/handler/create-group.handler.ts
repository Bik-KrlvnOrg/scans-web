import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { GroupRepository } from "src/groups/repository/group.repository";
import { GroupSuccessResponse } from "src/_proto/register";
import { CreateGroupCommand } from "../impl";
import { GroupCreatedEvent } from "src/groups/event";

@CommandHandler(CreateGroupCommand)
export class CreateGroupHandler implements ICommandHandler<CreateGroupCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(GroupRepository)
        private readonly groupRepository: GroupRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateGroupCommand): Promise<GroupSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.groupRepository.createGroup(cmd)
            this.event$.publish(new GroupCreatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code: 500, message: err.message })
        }
    }
}
