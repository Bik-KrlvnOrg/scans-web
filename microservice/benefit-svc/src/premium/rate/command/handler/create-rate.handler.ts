import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRateCommand } from "../impl";
import { RateRepository } from "../../repository";
import { RateCreatedEvent } from "../../event";


@CommandHandler(CreateRateCommand)
export class CreateRateHandler implements ICommandHandler<CreateRateCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(RateRepository)
        private readonly rateRepository: RateRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateRateCommand) {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.rateRepository.createRate(cmd)
            this.event$.publish(new RateCreatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }
}
