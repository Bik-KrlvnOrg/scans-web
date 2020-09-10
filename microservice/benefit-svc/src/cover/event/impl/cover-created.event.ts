import { IEvent } from "@nestjs/cqrs";

export class CoverCreatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}