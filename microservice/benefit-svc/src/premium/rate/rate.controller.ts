import { Controller } from '@nestjs/common';
import { RateService } from './rate.service';
import { CreateRateRequest, PremiumSuccessResponse } from 'src/_proto/benefit';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('rate')
export class RateController {
    constructor(private readonly rateService: RateService) { }

    @GrpcMethod('PremiumService', 'CreatePremiumRate')
    async createRate(req: CreateRateRequest): Promise<PremiumSuccessResponse> {
        return await this.rateService.createRate(req.rates)
    }
}
