import { IEvent } from "@nestjs/cqrs";

export class RateCreatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}