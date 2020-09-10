import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { RateCreatedEvent } from "../impl";

@EventsHandler(RateCreatedEvent)
export class RateCreatedHandler implements IEventHandler<RateCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: RateCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}