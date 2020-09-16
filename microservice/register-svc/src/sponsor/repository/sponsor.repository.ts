import { SponsorEntity } from "../entity/sponsor.entity";
import { EntityRepository, Repository } from "typeorm";
import { Sponsor } from "src/_proto/register";

@EntityRepository(SponsorEntity)
export class SponsorRepository extends Repository<SponsorEntity>{
    async createSponsor(data: Sponsor): Promise<SponsorEntity> {
        const dto: Omit<Sponsor, 'id'> = data
        const entity = this.create(dto)
        return await this.save(entity)
    }
}