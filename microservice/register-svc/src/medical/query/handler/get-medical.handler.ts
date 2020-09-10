import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { Medical } from "src/_proto/register";
import { GetMedicalQuery } from "../impl";
import { MedicalRepository } from "src/medical/repository/medical.repository";

@QueryHandler(GetMedicalQuery)
export class GetMedicalHandler implements IQueryHandler<GetMedicalQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(MedicalRepository)
        private readonly medicalRepository: MedicalRepository,
    ) { }

    async execute(query: GetMedicalQuery): Promise<Medical> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const medical = await this.medicalRepository.findOne({ where: { id: request } })
            return medical
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }

}