import { MemberGroup } from "src/_proto/register";
import { Repository, EntityRepository } from "typeorm";
import { MemberGroupEntity } from "../entity";

@EntityRepository(MemberGroupEntity)
export class MemberGroupRepository extends Repository<MemberGroupEntity>{

    async createMemberGroup(data: MemberGroup) {
        const {id,...dto} = data
        const entity = this.create(dto)
        return this.save(entity)
    }
}