import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { CoverCreatedEvent } from "../impl";

@EventsHandler(CoverCreatedEvent)
export class CoverCreatedHandler implements IEventHandler<CoverCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: CoverCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}