import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { CoverRepository } from "src/cover/repository/cover.repository";
import { CoverSuccessResponse } from "src/_proto/benefit";
import { CoverDeletedEvent } from "src/cover/event";
import { DeleteCoverCommand } from "../impl";

@CommandHandler(DeleteCoverCommand)
export class DeleteCoverHandler implements ICommandHandler<DeleteCoverCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(CoverRepository)
        private readonly coverRepository: CoverRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeleteCoverCommand): Promise<CoverSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const cover = await this.coverRepository.findOne({ where: { id: cmd } })
            if (!cover) throw new RpcException({ status: 404, message: 'cover not found' })
            const result = await this.coverRepository.remove(cover)
            this.event$.publish(new CoverDeletedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code: 500, message: err.message })
        }
    }
}
