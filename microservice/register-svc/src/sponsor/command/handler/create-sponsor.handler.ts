import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { CreateSponsorCommand } from "../impl";
import { Logger } from "@nestjs/common";
import { SponsorRepository } from "../../repository/sponsor.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { SponsorCreatedEvent } from "../../event";

@CommandHandler(CreateSponsorCommand)
export class CreateSponsorHandler implements ICommandHandler<CreateSponsorCommand>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(SponsorRepository)
        private readonly sponsorRepository: SponsorRepository,
        private readonly event$: EventBus) { }

    async execute(command: CreateSponsorCommand): Promise<any> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name)
        const { req, members } = command

        const data = { ...req.register.sponsor, members }

        const result = await this.sponsorRepository.createSponsor(data)
        this.event$.publish(new SponsorCreatedEvent(result))
        return { success: true }
    }
}