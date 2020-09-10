import { ClientGrpc } from "@nestjs/microservices";
import { Inject, OnModuleInit } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MedicalSuccessResponseType, MedicalType } from "./medical.type";
import { PROVIDERS } from "src/libs/common";
import { IMedicalRpcService } from "src/interface/register-service.interface";
import { MedicalSuccessResponse } from "src/_proto/register";
import { RemoveMedicalInputDto, FindMedicalInputDto } from "src/dto/register.dto";
import { MedicalInput, UpdateMedicalInput } from "./medical.input";


@Resolver()
export class MedicalResolver implements OnModuleInit {
    constructor(@Inject(PROVIDERS.REGISTER_CLIENT) private readonly client: ClientGrpc) { }
    private medicalService: IMedicalRpcService

    onModuleInit(): void {
        this.medicalService = this.client.getService<IMedicalRpcService>('MedicalService')
    }

    @Mutation(returns => MedicalSuccessResponseType)
    async createMedical(@Args('input') data: MedicalInput): Promise<MedicalSuccessResponse> {
        const medical = await this.medicalService.createMedical(data).toPromise()
        return medical
    }

    @Mutation(returns => MedicalSuccessResponseType)
    async removeMedical(@Args('input') data: RemoveMedicalInputDto): Promise<MedicalSuccessResponse> {
        const result = await this.medicalService.deleteMedical(data).toPromise()
        console.log('sr', result)
        return result
    }

    @Mutation(returns => MedicalSuccessResponseType)
    async updateMedical(@Args('input') data: UpdateMedicalInput): Promise<MedicalSuccessResponse> {
        const result = await this.medicalService.updateMedical(data).toPromise()
        console.log('sr', result)
        return result
    }


    @Query(returns => [MedicalType], { nullable: true })
    async listMedicals(): Promise<MedicalType[]> {
        const result = await this.medicalService.listMedicals(null).toPromise()
        console.log('ms', result)
        return result.medicals
    }

    @Query(returns => MedicalType, { nullable: true })
    async medical(@Args('input') data: FindMedicalInputDto): Promise<MedicalType> {
        const result = await this.medicalService.getMedical(data).toPromise()
        console.log('m', result)
        return result
    }
}