import { SponsorCreatedEvent } from "../impl";
import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";

@EventsHandler(SponsorCreatedEvent)
export class SponsorCreatedHandler implements IEventHandler<SponsorCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: SponsorCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}