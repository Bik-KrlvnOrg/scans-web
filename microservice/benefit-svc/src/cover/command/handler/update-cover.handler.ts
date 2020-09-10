import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateCoverCommand } from "../impl";
import { CoverRepository } from "src/cover/repository/cover.repository";
import { CoverSuccessResponse } from "src/_proto/benefit";
import { CoverUpdatedEvent } from "src/cover/event";

@CommandHandler(UpdateCoverCommand)
export class UpdateCoverHandler implements ICommandHandler<UpdateCoverCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(CoverRepository)
        private readonly coverRepository: CoverRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: UpdateCoverCommand): Promise<CoverSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const cover = await this.coverRepository.findOne({ where: { id: cmd.id } })
            if (!cover) throw new RpcException({ code: 404, message: 'cover not found' })

            const entity = this.coverRepository.create(cmd)
            const result = await this.coverRepository.save(entity)
            this.event$.publish(new CoverUpdatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, status: 500 })
        }
    }
}
