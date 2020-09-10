import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { PremiumRepository } from "src/premium/repository/premium.repository";
import { PremiumSuccessResponse, Premium } from "src/_proto/benefit";
import { PremiumEntity } from "src/premium/entity/premium.entity";
import { PremiumUpdatedEvent } from "src/premium/event";
import { UpdatePremiumCommand } from "../impl";

@CommandHandler(UpdatePremiumCommand)
export class UpdatePremiumHandler implements ICommandHandler<UpdatePremiumCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(PremiumRepository)
        private readonly premiumRepository: PremiumRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: UpdatePremiumCommand): Promise<PremiumSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const premium = await this.premiumRepository.findOne({ where: { id: cmd.id } })
            if (!premium) throw new RpcException({ message: 'premium not found', code: 404 })
            const result = await this.premiumRepository.save(this.updateResult(premium, cmd))
            this.event$.publish(new PremiumUpdatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }
    private updateResult(premium: PremiumEntity, cmd: Premium) {
        premium.name = cmd.name
        premium.description = cmd.description
        return premium
    }
}
