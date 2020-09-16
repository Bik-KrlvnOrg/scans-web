import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { GroupRepository } from "src/groups/repository/group.repository";
import { GroupSuccessResponse } from "src/_proto/register";
import { UpdateGroupCommand } from "../impl";
import { GroupUpdatedEvent } from "src/groups/event";

@CommandHandler(UpdateGroupCommand)
export class UpdateGroupHandler implements ICommandHandler<UpdateGroupCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(GroupRepository)
        private readonly groupRepository: GroupRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: UpdateGroupCommand): Promise<GroupSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const group = await this.groupRepository.findOne({ where: { id: cmd.id } })
            if (!group) throw new RpcException({ code: 404, message: 'group not found' })

            const entity = this.groupRepository.create(cmd)
            const result = this.groupRepository.save(entity)
            this.event$.publish(new GroupUpdatedEvent(result))
            return null
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message })
        }
    }
}
