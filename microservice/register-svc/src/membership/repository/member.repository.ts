import { MemberEntity } from "../entity/member.entity";
import { EntityRepository, Repository } from "typeorm";
import { Member } from "src/_proto/register";

@EntityRepository(MemberEntity)
export class MemberRepository extends Repository<MemberEntity>{
    async createMember(data: Member[]): Promise<MemberEntity[]> {
        const dto: Omit<Member, 'id'>[] = data
        const entities = this.create(dto);
        return await this.save(entities)
    }
}