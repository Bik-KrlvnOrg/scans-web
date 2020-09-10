import { ClientGrpc } from "@nestjs/microservices";
import { Inject, OnModuleInit } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateMedicalInput } from "./medical.input";
import { IMedicalRpcService } from "../interface/medical-service.interface";
import { MedicalSuccessResponseType, MedicalResponseType } from "./medical.type";
import { MedicalResponse, FindMedialsRequest, MedicalSuccessResponse } from "src/_proto/register";
import { PROVIDERS } from "src/libs/common";
import { FindMedicalInputDto, RemoveMedicalInputDto, UpdateMedicalInputDto } from "src/dto/medical.dto";


@Resolver()
export class MedicalResolver implements OnModuleInit {
    constructor(@Inject(PROVIDERS.REGISTER_CLIENT) private readonly client: ClientGrpc) { }
    private medicalService: IMedicalRpcService

    onModuleInit(): void {
        this.medicalService = this.client.getService<IMedicalRpcService>('MedicalService')
    }

    @Mutation(returns => MedicalSuccessResponseType)
    async createMedical(@Args('input') data: CreateMedicalInput): Promise<MedicalSuccessResponse> {
        const medical = await this.medicalService.createMedical(data).toPromise()
        return medical
    }

    @Mutation(returns => MedicalSuccessResponseType)
    async removeMedical(@Args('input') data: RemoveMedicalInputDto): Promise<MedicalSuccessResponse> {
        const medical = await this.medicalService.deleteMedical(data).toPromise()
        return medical
    }

    @Mutation(returns => MedicalSuccessResponseType)
    async updateMedical(@Args('input') data: UpdateMedicalInputDto): Promise<MedicalSuccessResponse> {
        const medical = await this.medicalService.updateMedical(data).toPromise()
        return medical
    }


    @Query(returns => [MedicalResponseType], { nullable: true })
    async getMedicals(@Args('input') data: FindMedicalInputDto): Promise<MedicalResponse[]> {
        const req: FindMedialsRequest = { id: data.id }
        const result = await this.medicalService.getMedicals(req).toPromise()
        return result.medicals
    }
}