import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { PremiumCreatedEvent } from "../impl/premium-created.event";


@EventsHandler(PremiumCreatedEvent)
export class PremiumCreatedHandler implements IEventHandler<PremiumCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: PremiumCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}