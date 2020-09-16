import { IEvent } from "@nestjs/cqrs";
import { GroupEntity } from "src/groups/entity/group.entity";

export class GroupCreatedEvent implements IEvent {
    constructor(public readonly data: GroupEntity) { }
}