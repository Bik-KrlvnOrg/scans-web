import { IEvent } from "@nestjs/cqrs";
import { PremiumEntity } from "src/premium/entity/premium.entity";

export class PremiumUpdatedEvent implements IEvent {
    constructor(public readonly data: PremiumEntity) { }
}