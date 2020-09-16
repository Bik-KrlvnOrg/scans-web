import { Group } from "src/_proto/register";
import { Repository, EntityRepository } from "typeorm";
import { GroupEntity } from "../entity/group.entity";

@EntityRepository(GroupEntity)
export class GroupRepository extends Repository<GroupEntity>{

    async createGroup(data: Group): Promise<GroupEntity> {
        const dto: Omit<Group, 'id'> = data
        const entity = this.create(dto)
        return this.save(entity)
    }
}