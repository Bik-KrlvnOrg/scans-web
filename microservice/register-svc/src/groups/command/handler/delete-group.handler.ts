import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { GroupRepository } from "src/groups/repository/group.repository";
import { GroupSuccessResponse } from "src/_proto/register";
import { DeleteGroupCommand } from "../impl/delete-group.command";
import { GroupDeletedEvent } from "src/groups/event";

@CommandHandler(DeleteGroupCommand)
export class DeleteGroupHandler implements ICommandHandler<DeleteGroupCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(GroupRepository)
        private readonly groupRepository: GroupRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeleteGroupCommand): Promise<GroupSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const group = await this.groupRepository.findOne({ where: { id: cmd } })
            if (!group) throw new RpcException({ code: 404, message: 'group not found' })
            const result = await this.groupRepository.remove(group)
            this.event$.publish(new GroupDeletedEvent(group))
            return null
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code: 500, message: err.message })
        }
    }
}
