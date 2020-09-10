import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { MedicalUpdatedEvent } from "../impl";
import { Logger } from "@nestjs/common";

@EventsHandler(MedicalUpdatedEvent)
export class MedicalUpdatedHandler implements IEventHandler<MedicalUpdatedEvent>{
    logger = new Logger(this.constructor.name)
    handle(event: MedicalUpdatedEvent) {
        this.logger.log(event, event.constructor.name)
    }

}