import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { CreatePremiumCommand } from "../impl/create-premium.command";
import { InjectRepository } from "@nestjs/typeorm";
import { PremiumRepository } from "src/premium/repository/premium.repository";
import { PremiumSuccessResponse, Premium, Rate } from "src/_proto/benefit";
import { CheckEntityService } from "src/libs";
import { PremiumEntity } from "src/premium/entity/premium.entity";
import { PremiumCreatedEvent } from "src/premium/event";

@CommandHandler(CreatePremiumCommand)
export class CreatePremiumHandler implements ICommandHandler<CreatePremiumCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(PremiumRepository)
        private readonly premiumRepository: PremiumRepository,
        private readonly checkEntityService: CheckEntityService,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreatePremiumCommand): Promise<PremiumSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            await this.checkEntityService.exists(PremiumEntity, cmd.name)
            const premium = await this.premiumRepository.createPremium(cmd)
            this.event$.publish(new PremiumCreatedEvent(premium))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }
}
