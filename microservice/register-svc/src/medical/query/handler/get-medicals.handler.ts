import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetMedicalsQuery } from "../impl/get-medicals.query";
import { Logger } from "@nestjs/common";
import { MedicalRepository } from "../../repository/medical.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { RpcException } from "@nestjs/microservices";
import { ListMedicalResponse } from "src/_proto/register";

@QueryHandler(GetMedicalsQuery)
export class GetMedicalsHandler implements IQueryHandler<GetMedicalsQuery>{
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(MedicalRepository)
        private readonly medicalRepository: MedicalRepository,
    ) { }

    async execute(query: GetMedicalsQuery): Promise<ListMedicalResponse> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, query.constructor.name)
            const { request } = query
            const medicals = request.id ? await this.findOne(request.id) : await this.findAll()
            const result: ListMedicalResponse = { medicals }
            return result
        } catch (err) {
            this.logger.log(err)
            throw new RpcException(err.message)
        }
    }

    private async findOne(id: string) {
        return await this.medicalRepository.find({ where: { id } })
    }

    private async findAll() {
        return await this.medicalRepository.find({ order: { name: 'ASC' } })
    }
}