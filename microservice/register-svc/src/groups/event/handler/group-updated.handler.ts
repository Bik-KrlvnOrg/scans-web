import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { GroupUpdatedEvent } from "../impl";

@EventsHandler(GroupUpdatedEvent)
export class GroupUpdatedHandler implements IEventHandler<GroupUpdatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: GroupUpdatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}