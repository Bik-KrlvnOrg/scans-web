import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { PremiumDeletedEvent } from "../impl/premium-deleted.event";

@EventsHandler(PremiumDeletedEvent)
export class PremiumDeletedHandler implements IEventHandler<PremiumDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: PremiumDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}