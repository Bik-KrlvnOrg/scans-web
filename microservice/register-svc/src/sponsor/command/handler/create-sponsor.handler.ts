import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { CreateSponsorCommand } from "../impl";
import { Logger } from "@nestjs/common";
import { SponsorRepository } from "../../repository/sponsor.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { SponsorCreatedEvent } from "../../event";
import { RegisterSuccessResponse } from "src/_proto/register";

@CommandHandler(CreateSponsorCommand)
export class CreateSponsorHandler implements ICommandHandler<CreateSponsorCommand>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(SponsorRepository)
        private readonly sponsorRepository: SponsorRepository,
        private readonly event$: EventBus) { }

    async execute(command: CreateSponsorCommand): Promise<RegisterSuccessResponse> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name)
        const { req } = command

        const data = req.sponsor

        const entity = await this.sponsorRepository.createSponsor(data)
        const result = req
        result.sponsor = entity
        this.event$.publish(new SponsorCreatedEvent(result))
        return { success: true }
    }
}