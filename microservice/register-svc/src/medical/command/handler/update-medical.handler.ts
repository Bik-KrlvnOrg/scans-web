import { UpdateMedicalCommand } from "../impl/update-medical.command";
import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicalRepository } from "src/medical/repository/medical.repository";
import { RpcException } from "@nestjs/microservices";
import { MedicalUpdatedEvent } from "src/medical/event";
import { MedicalSuccessResponse } from "src/_proto/register";

@CommandHandler(UpdateMedicalCommand)
export class UpdateMedicalHandler implements ICommandHandler<UpdateMedicalCommand>{
    logger = new Logger(this.constructor.name)
    constructor(
        @InjectRepository(MedicalRepository)
        private readonly medicalRepository: MedicalRepository,
        private readonly event$: EventBus) { }

    async execute(command: UpdateMedicalCommand): Promise<MedicalSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}`, command.constructor.name)
            const { cmd } = command

            const medical = await this.medicalRepository.findOne({ where: { id: cmd.id } })
            if (!medical) throw new RpcException({ message: 'medical not found', code: 404 })

            medical.name = cmd.name
            medical.value = cmd.value
            const result = await this.medicalRepository.save(medical)
            this.event$.publish(new MedicalUpdatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }
}