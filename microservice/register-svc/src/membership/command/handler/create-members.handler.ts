import { CommandHandler, ICommandHandler, EventBus } from "@nestjs/cqrs";
import { CreateMembersCommand } from "../impl/create-members.command";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MemberRepository } from "../../repository/member.repository";
import { MemberEntity } from "../../entity/member.entity";
import { RpcException } from "@nestjs/microservices";
import { MembersCreatedEvent } from "../../event";
import { Member } from "src/_proto/register";

@CommandHandler(CreateMembersCommand)
export class CreateMembersHandler implements ICommandHandler<CreateMembersCommand>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(MemberRepository)
        private readonly memberRepository: MemberRepository,
        private readonly event$: EventBus) { }

    async execute(command: CreateMembersCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name} ...`, command.constructor.name)
            const { cmd } = command
            const entities = await this.getSaveMembers(cmd.register.members)
            this.event$.publish(new MembersCreatedEvent(entities, cmd))
            return { activiationLink: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException(err.message)
        }
    }

    private aPromise(item: MemberEntity): Promise<MemberEntity> {
        return Promise.resolve(item)
    }

    private async createMember(data: Member): Promise<MemberEntity> {
        const member = await this.memberRepository.createMember(data)
        return this.aPromise(member)
    }

    private async getSaveMembers(members: Member[]): Promise<MemberEntity[]> {
        return Promise.all(members.map(member => this.createMember(member)))
    }
}