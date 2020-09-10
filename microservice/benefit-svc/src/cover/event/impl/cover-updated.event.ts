import { IEvent } from "@nestjs/cqrs";

export class CoverUpdatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}