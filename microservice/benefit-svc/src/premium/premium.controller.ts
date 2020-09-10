import { Controller } from '@nestjs/common';
import { PremiumService } from './premium.service';
import { CreatePremiumRequest, PremiumSuccessResponse, DeletePremiumRequest, UpdatePremiumRequest, GetPremiumRequest, Premium, FindPremiumsRequest, ListPremiumsResponse } from 'src/_proto/benefit';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('premium')
export class PremiumController {
    constructor(private readonly premiumService: PremiumService) { }

    @GrpcMethod('PremiumService', 'CreatePremium')
    async createPremium(req: CreatePremiumRequest): Promise<PremiumSuccessResponse> {
        return await this.premiumService.createPremium(req.premium)
    }

    @GrpcMethod('PremiumService', 'UpdatePremium')
    async updatePremium(req: UpdatePremiumRequest): Promise<PremiumSuccessResponse> {
        return await this.premiumService.updatePremium(req.premium)
    }

    @GrpcMethod('PremiumService', 'DeletePremium')
    async deletePremium(req: DeletePremiumRequest): Promise<PremiumSuccessResponse> {
        return await this.premiumService.deletePremium(req.id)
    }

    @GrpcMethod('PremiumService', 'GetPremium')
    async getPremium(req: GetPremiumRequest): Promise<Premium> {
        return await this.premiumService.getPremium(req.id)
    }

    @GrpcMethod('PremiumService', 'ListPremiums')
    async listPremiums(req: FindPremiumsRequest): Promise<ListPremiumsResponse> {
        return await this.premiumService.listPremiums(req)
    }
}
