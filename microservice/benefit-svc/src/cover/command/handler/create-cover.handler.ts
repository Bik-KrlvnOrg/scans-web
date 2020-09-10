import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCoverCommand } from "../impl";
import { CoverRepository } from "src/cover/repository/cover.repository";
import { Cover } from "src/_proto/benefit";
import { CoverCreatedEvent } from "src/cover/event";

@CommandHandler(CreateCoverCommand)
export class CreateCoverHandler implements ICommandHandler<CreateCoverCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(CoverRepository)
        private readonly coverRepository: CoverRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateCoverCommand): Promise<Cover> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.coverRepository.createCover(cmd);
            this.event$.publish(new CoverCreatedEvent(result));
            return result;
        } catch (err) {
            this.logger.log(err);
            throw new RpcException({ message: err.message, code: 500 });
        }
    }
}
