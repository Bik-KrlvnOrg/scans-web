import { IEvent } from "@nestjs/cqrs";
import { MedicalEntity } from "../../entity/medical.entity";

export class MedicalCreatedEvent implements IEvent {
    constructor(public readonly data: MedicalEntity[]) { }
}