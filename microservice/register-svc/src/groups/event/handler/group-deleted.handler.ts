import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { GroupDeletedEvent } from "../impl";

@EventsHandler(GroupDeletedEvent)
export class GroupDeletedHandler implements IEventHandler<GroupDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: GroupDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}