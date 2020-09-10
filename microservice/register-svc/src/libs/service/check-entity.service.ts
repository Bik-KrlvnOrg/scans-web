import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CheckEntityService {
    constructor(@InjectEntityManager() private readonly entityManager: EntityManager) { }

    async exists(entityClass: any, name: string): Promise<void> {
        const result = await this.entityManager.findOne(entityClass, { name })
        if (result) throw new Error(`${name} already exists`)
    }
}