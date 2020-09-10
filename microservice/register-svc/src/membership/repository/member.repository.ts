import { MemberEntity } from "../entity/member.entity";
import { EntityRepository, Repository } from "typeorm";
import { Member } from "src/_proto/register";

@EntityRepository(MemberEntity)
export class MemberRepository extends Repository<MemberEntity>{
    async createMember(data: Member[]): Promise<MemberEntity[]> {
        const entities = this.create(data);
        return await this.save(entities)
    }
}