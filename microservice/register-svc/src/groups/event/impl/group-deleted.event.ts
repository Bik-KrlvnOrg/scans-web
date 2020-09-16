import { IEvent } from "@nestjs/cqrs";

export class GroupDeletedEvent implements IEvent {
    constructor(public readonly data: any) { }
}