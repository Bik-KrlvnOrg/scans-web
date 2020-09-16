import { IEvent } from "@nestjs/cqrs";
import { Register } from "src/_proto/register";

export class MembersCreatedEvent implements IEvent {
    constructor(public readonly req: Register) { }
}