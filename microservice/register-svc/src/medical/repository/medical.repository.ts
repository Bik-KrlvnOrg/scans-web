import { Repository, EntityRepository, InsertResult } from "typeorm";
import { MedicalEntity } from "../entity/medical.entity";
import { Medical } from "src/_proto/register";

@EntityRepository(MedicalEntity)
export class MedicalRepository extends Repository<MedicalEntity>{

    async createMedicals(data: Medical[]): Promise<InsertResult> {
        const entity = this.create(data)
        const result = await this.createQueryBuilder()
            .insert()
            .orUpdate({ conflict_target: ['name'], overwrite: ['value'] })
            .into('medical')
            .values(entity)
            .returning(['id', 'name', 'value'])
            .execute()
        return result
    }
}