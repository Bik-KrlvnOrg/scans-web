import { CommandHandler, ICommandHandler, EventBus } from "@nestjs/cqrs";
import { CreateMembersCommand } from "../impl/create-members.command";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MemberRepository } from "../../repository/member.repository";
import { RpcException } from "@nestjs/microservices";
import { MembersCreatedEvent } from "../../event";
import { RegisterSuccessResponse } from "src/_proto/register";

@CommandHandler(CreateMembersCommand)
export class CreateMembersHandler implements ICommandHandler<CreateMembersCommand>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(MemberRepository)
        private readonly memberRepository: MemberRepository,
        private readonly event$: EventBus) { }

    async execute(command: CreateMembersCommand): Promise<RegisterSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name} ...`, command.constructor.name)
            const { cmd } = command
            const entities = await this.memberRepository.createMember(cmd.sponsor.members)
            const req = { ...cmd }
            req.sponsor.members = entities
            this.event$.publish(new MembersCreatedEvent(req))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException(err.message)
        }
    }
}