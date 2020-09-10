import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMedicalCommand } from './command/impl/create-medical.command';
import { GetMedicalsQuery } from './query/impl/get-medicals.query';
import { CreateMedicalRequest, FindMedialsRequest, UpdateMedicalRequest } from 'src/_proto/register';
import { DeleteMedicalCommand, UpdateMedicalCommand } from './command';

@Injectable()
export class MedicalService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus) { }

    async createMedical(data: CreateMedicalRequest) {
        return await this.commandBus.execute(new CreateMedicalCommand(data))
    }

    async getMedicals(data: FindMedialsRequest) {
        return await this.queryBus.execute(new GetMedicalsQuery(data));
    }

    async removeMedical(data: FindMedialsRequest) {
        return await this.commandBus.execute(new DeleteMedicalCommand(data))
    }

    async updateMedical(data: UpdateMedicalRequest) {
        return await this.commandBus.execute(new UpdateMedicalCommand(data))
    }

}
