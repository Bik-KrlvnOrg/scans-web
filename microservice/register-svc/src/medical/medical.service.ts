import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMedicalCommand } from './command/impl/create-medical.command';
import { GetMedicalsQuery } from './query/impl/get-medicals.query';
import { ListMedicalsRequest, Medical } from 'src/_proto/register';
import { DeleteMedicalCommand, UpdateMedicalCommand } from './command';
import { GetMedicalQuery } from './query';

@Injectable()
export class MedicalService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus) { }

    async createMedical(data: Medical[]) {
        return await this.commandBus.execute(new CreateMedicalCommand(data))
    }

    async getMedicals(data: ListMedicalsRequest) {
        return await this.queryBus.execute(new GetMedicalsQuery(data));
    }

    async getMedical(data: string) {
        return await this.queryBus.execute(new GetMedicalQuery(data));
    }

    async removeMedical(data: string) {
        return await this.commandBus.execute(new DeleteMedicalCommand(data))
    }

    async updateMedical(data: Medical) {
        return await this.commandBus.execute(new UpdateMedicalCommand(data))
    }

}
