import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetMedicalsQuery } from "../impl/get-medicals.query";
import { Logger } from "@nestjs/common";
import { MedicalRepository } from "../../repository/medical.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { ListMedicalsResponse } from "src/_proto/register";

@QueryHandler(GetMedicalsQuery)
export class GetMedicalsHandler implements IQueryHandler<GetMedicalsQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(MedicalRepository)
        private readonly medicalRepository: MedicalRepository,
    ) { }

    async execute(query: GetMedicalsQuery): Promise<ListMedicalsResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const medicals = await this.medicalRepository.find({ order: { name: 'ASC' } })
            return { medicals }
        } catch (err) {
            this.logger.log(err)
            throw new RpcException({ message: err.message, code: 500 })
        }
    }
}