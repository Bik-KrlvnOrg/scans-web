import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { DeleteMedicalCommand } from "../impl";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicalRepository } from "src/medical/repository/medical.repository";
import { Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { MedicalDeletedEvent } from "src/medical/event";
import { MedicalSuccessResponse } from "src/_proto/register";

@CommandHandler(DeleteMedicalCommand)
export class DeleteMedicalHandler implements ICommandHandler<DeleteMedicalCommand>{
    constructor(
        @InjectRepository(MedicalRepository)
        private readonly medicalRepository: MedicalRepository,
        private readonly event$: EventBus) { }

    logger = new Logger(this.constructor.name)

    async execute(command: DeleteMedicalCommand): Promise<MedicalSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name)
            const { cmd } = command
            const medical = await this.medicalRepository.findOne({ where: { id: cmd } })
            if (!medical) throw new RpcException({ message: "medical not found", code: 404 })

            const result = await this.medicalRepository.remove(medical)
            this.event$.publish(new MedicalDeletedEvent(result))
            return { success: true }

        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })

        }
    }
}