import { Repository, EntityRepository, InsertResult } from "typeorm";
import { RateEntity } from "../entity/rate.entity";
import { Rate } from "src/_proto/benefit";

@EntityRepository(RateEntity)
export class RateRepository extends Repository<RateEntity>{

    async createRate(data: Rate[]): Promise<RateEntity[]> {
        const entities = this.create(data)
        return Promise.all(entities.map(async (entity) => await this.save(entity)))
    }
}