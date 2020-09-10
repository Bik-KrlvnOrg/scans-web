import { Controller, Logger } from '@nestjs/common';
import { MedicalService } from './medical.service';
import { GrpcMethod } from '@nestjs/microservices'
import { CreateMedicalRequest, MedicalSuccessResponse, UpdateMedicalRequest, DeleteMedicalRequest, ListMedicalsRequest, ListMedicalsResponse, GetMedicalRequest } from 'src/_proto/register';

@Controller('medical')
export class MedicalController {
    constructor(
        private readonly medicalService: MedicalService
    ) { }
    logger = new Logger(this.constructor.name)

    @GrpcMethod('MedicalService', 'CreateMedical')
    async CreateMedical(req: CreateMedicalRequest, _ctx: any): Promise<MedicalSuccessResponse> {
        return await this.medicalService.createMedical(req.medicals)
    }

    @GrpcMethod('MedicalService', 'ListMedicals')
    async getMedicals(req: ListMedicalsRequest): Promise<ListMedicalsResponse> {
        return await this.medicalService.getMedicals(req);
    }

    @GrpcMethod('MedicalService', 'GetMedical')
    async getMedical(req: GetMedicalRequest): Promise<ListMedicalsResponse> {
        return await this.medicalService.getMedical(req.id);
    }

    @GrpcMethod('MedicalService', 'DeleteMedical')
    async removeMedical(req: DeleteMedicalRequest, _ctx: any): Promise<MedicalSuccessResponse> {
        return await this.medicalService.removeMedical(req.id)
    }

    @GrpcMethod('MedicalService', 'UpdateMedical')
    async updateMedical(req: UpdateMedicalRequest, _ctx: any): Promise<MedicalSuccessResponse> {
        return await this.medicalService.updateMedical(req.medical)
    }
}
