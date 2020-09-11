import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { UserUpdatedEvent } from "../impl";

@EventsHandler(UserUpdatedEvent)
export class UserUpdatedHandler implements IEventHandler<UserUpdatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: UserUpdatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}