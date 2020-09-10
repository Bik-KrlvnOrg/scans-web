import { Repository, EntityRepository } from "typeorm";
import { CoverEntity } from "../entity/cover.entity";
import { Cover } from "src/_proto/benefit";

@EntityRepository(CoverEntity)
export class CoverRepository extends Repository<CoverEntity>{

    async createCover(data: Cover) {
        const entity = this.create(data)
        return await this.save(entity)
    }
}