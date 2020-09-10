import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { PremiumUpdatedEvent } from "../impl/premium-updated.event";

@EventsHandler(PremiumUpdatedEvent)
export class PremiumUpdatedHandler implements IEventHandler<PremiumUpdatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: PremiumUpdatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}