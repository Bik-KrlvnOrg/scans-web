import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { MemberGroupCreatedEvent } from "../impl";

@EventsHandler(MemberGroupCreatedEvent)
export class MemberGroupCreatedHandler implements IEventHandler<MemberGroupCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: MemberGroupCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}