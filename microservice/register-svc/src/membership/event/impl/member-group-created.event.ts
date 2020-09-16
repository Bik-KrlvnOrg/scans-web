import { IEvent } from "@nestjs/cqrs";

export class MemberGroupCreatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}