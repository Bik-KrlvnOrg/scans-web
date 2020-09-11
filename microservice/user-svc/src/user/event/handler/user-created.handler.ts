import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { UserCreatedEvent } from "../impl";

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: UserCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}