import { SponsorEntity } from "../entity/sponsor.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(SponsorEntity)
export class SponsorRepository extends Repository<SponsorEntity>{
    async createSponsor(data: any) {
        const entity = this.create(data)
        return await this.save(entity)
    }
}