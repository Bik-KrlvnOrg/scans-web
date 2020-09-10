import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { CoverDeletedEvent } from "../impl";

@EventsHandler(CoverDeletedEvent)
export class CoverDeletedHandler implements IEventHandler<CoverDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: CoverDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}