import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMemberGroupCommand } from "../impl";
import { MemberGroupCreatedEvent } from "src/membership/event";
import { MemberGroupRepository } from "src/membership/repository";
import { MemberGroup } from "src/_proto/register";

@CommandHandler(CreateMemberGroupCommand)
export class CreateMemberGroupHandler implements ICommandHandler<CreateMemberGroupCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(MemberGroupRepository)
        private readonly memberRepository: MemberGroupRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateMemberGroupCommand) {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const { members } = cmd.sponsor
            const data: MemberGroup = {
                id: null,
                group: cmd.group,
                members,
                premiumId: members[0].premiumId,
                principalId: members[0].id,
            }
            const result = await this.memberRepository.createMemberGroup(data)
            this.event$.publish(new MemberGroupCreatedEvent(result))
            return null
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code: 500, message: err.message })
        }
    }
}
