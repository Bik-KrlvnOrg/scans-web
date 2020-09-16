import { IEvent } from "@nestjs/cqrs";

export class GroupUpdatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}