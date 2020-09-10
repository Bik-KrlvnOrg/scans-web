import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { CreateMedicalCommand } from "../impl/create-medical.command";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MedicalRepository } from "../../repository/medical.repository";
import { MedicalCreatedEvent } from "../../event/impl/medical-created.event";
import { MedicalSuccessResponse } from "src/_proto/register";
import { RpcException } from "@nestjs/microservices";

@CommandHandler(CreateMedicalCommand)
export class CreateMedicalHandler implements ICommandHandler<CreateMedicalCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(MedicalRepository)
        private readonly medicalRepository: MedicalRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateMedicalCommand): Promise<MedicalSuccessResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.medicalRepository.createMedicals(cmd)
            this.event$.publish(new MedicalCreatedEvent(result.raw))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ code:500,message: err.message })
        }
    }
}
