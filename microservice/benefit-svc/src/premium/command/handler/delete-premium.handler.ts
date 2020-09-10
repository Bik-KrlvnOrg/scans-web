import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { PremiumRepository } from "src/premium/repository/premium.repository";
import { PremiumSuccessResponse } from "src/_proto/benefit";
import { PremiumDeletedEvent } from "src/premium/event";
import { DeletePremiumCommand } from "../impl";

@CommandHandler(DeletePremiumCommand)
export class DeletePremiumHandler implements ICommandHandler<DeletePremiumCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(PremiumRepository)
        private readonly premiumRepository: PremiumRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeletePremiumCommand): Promise<PremiumSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const premium = await this.premiumRepository.findOne({ where: { id: cmd } })
            if (!premium) throw new RpcException({ message: 'premium not found', code: 404 })
            const result = await this.premiumRepository.remove(premium)
            this.event$.publish(new PremiumDeletedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }
}
