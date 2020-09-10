import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { MedicalDeletedEvent } from "../impl";
import { Logger } from "@nestjs/common";

@EventsHandler(MedicalDeletedEvent)
export class MedicalDeletedHandler implements IEventHandler<MedicalDeletedEvent>{
    logger = new Logger(this.constructor.name)
    handle(event: MedicalDeletedEvent) {
        this.logger.log(event, event.constructor.name)
    }
}