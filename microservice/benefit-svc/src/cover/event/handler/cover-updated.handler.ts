import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { CoverUpdatedEvent } from "../impl";

@EventsHandler(CoverUpdatedEvent)
export class CoverUpdatedHandler implements IEventHandler<CoverUpdatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: CoverUpdatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}