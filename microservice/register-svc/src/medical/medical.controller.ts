import { Controller, Logger } from '@nestjs/common';
import { MedicalService } from './medical.service';
import { GrpcMethod } from '@nestjs/microservices'
import { CreateMedicalRequest, FindMedialsRequest, ListMedicalResponse, MedicalSuccessResponse, UpdateMedicalRequest } from 'src/_proto/register';

@Controller('medical')
export class MedicalController {
    constructor(
        private readonly medicalService: MedicalService
    ) { }
    logger = new Logger(this.constructor.name)

    @GrpcMethod('MedicalService', 'createMedical')
    async CreateMedical(data: CreateMedicalRequest, _ctx: any): Promise<MedicalSuccessResponse> {
        return await this.medicalService.createMedical(data)
    }

    @GrpcMethod('MedicalService', 'getMedicals')
    async getMedicals(data: FindMedialsRequest): Promise<ListMedicalResponse> {
        return await this.medicalService.getMedicals(data);
    }

    @GrpcMethod('MedicalService', 'deleteMedical')
    async removeMedical(data: FindMedialsRequest, _ctx: any): Promise<MedicalSuccessResponse> {
        return await this.medicalService.removeMedical(data)
    }

    @GrpcMethod('MedicalService', 'updateMedical')
    async updateMedical(data: UpdateMedicalRequest, _ctx: any): Promise<MedicalSuccessResponse> {
        return await this.medicalService.updateMedical(data)
    }
}
