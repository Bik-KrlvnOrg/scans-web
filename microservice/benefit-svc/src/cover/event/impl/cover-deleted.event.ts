import { IEvent } from "@nestjs/cqrs";

export class CoverDeletedEvent implements IEvent {
    constructor(public readonly data: any) { }
}