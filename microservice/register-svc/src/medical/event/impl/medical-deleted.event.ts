import { IEvent } from "@nestjs/cqrs";
import { MedicalEntity } from "src/medical/entity/medical.entity";

export class MedicalDeletedEvent implements IEvent {
    constructor(public readonly data: MedicalEntity) { }
}