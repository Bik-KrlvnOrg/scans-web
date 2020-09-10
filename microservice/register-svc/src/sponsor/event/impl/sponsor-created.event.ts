import { IEvent } from "@nestjs/cqrs";
import { SponsorEntity } from "../../entity/sponsor.entity";

export class SponsorCreatedEvent implements IEvent {
    constructor(public readonly data: SponsorEntity[]) { }
}