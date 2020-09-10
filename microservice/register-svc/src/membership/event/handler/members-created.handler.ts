import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { MembersCreatedEvent } from "../impl/members-created.event";
import { Logger } from "@nestjs/common";

@EventsHandler(MembersCreatedEvent)
export class MembersCreatedHandler implements IEventHandler<MembersCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: MembersCreatedEvent): void {
        this.logger.log(event.data, event.constructor.name)
    }
}