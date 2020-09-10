import { Repository, EntityRepository } from "typeorm";
import { PremiumEntity } from "../entity/premium.entity";
import { Premium } from "src/_proto/benefit";

@EntityRepository(PremiumEntity)
export class PremiumRepository extends Repository<PremiumEntity>{

    async createPremium(premium: Premium): Promise<PremiumEntity> {
        const data: Omit<Premium, 'id'> = premium
        const entity = this.create(data)
        return await this.save(entity)
    }

}