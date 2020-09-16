import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { GroupCreatedEvent } from "../impl";

@EventsHandler(GroupCreatedEvent)
export class GroupCreatedHandler implements IEventHandler<GroupCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: GroupCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}