import { IEvent } from "@nestjs/cqrs";
import { MedicalEntity } from "src/medical/entity/medical.entity";

export class MedicalUpdatedEvent implements IEvent {
    constructor(public readonly data: MedicalEntity) { }
}