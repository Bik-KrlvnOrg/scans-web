import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { MedicalCreatedEvent } from "../impl/medical-created.event";
import { Logger } from "@nestjs/common";

@EventsHandler(MedicalCreatedEvent)
export class MedicalCreatedHandler implements IEventHandler<MedicalCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: MedicalCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}