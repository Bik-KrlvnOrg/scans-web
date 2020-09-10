import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { OnModuleInit, Inject } from '@nestjs/common';
import { IPremiumService } from 'src/interface/benefit-service.interface';
import { ClientGrpc } from '@nestjs/microservices';
import { PROVIDERS } from 'src/libs';
import { PremiumSuccessType, PremiumType, RateType } from './premium.type';
import { PremiumInput, PremiumFindInput, RateInput } from './premium.input';

@Resolver()
export class PremiumResolver implements OnModuleInit {
    private premiumService: IPremiumService
    constructor(@Inject(PROVIDERS.BENEFIT_CLIENT) private readonly client: ClientGrpc) { }

    onModuleInit() {
        this.premiumService = this.client.getService<IPremiumService>('PremiumService')
    }

    @Mutation(returns => PremiumSuccessType)
    async createPremium(@Args('input') req: PremiumInput) {
        return await this.premiumService.createPremium(req, null).toPromise()
    }

    @Mutation(returns => PremiumSuccessType)
    async createPremiumRate(@Args('input') req: RateInput) {
        return await this.premiumService.createPremiumRate(req, null).toPromise()
    }

    @Mutation(returns => PremiumSuccessType)
    async updatePremium(@Args('input') req: PremiumInput) {
        return await this.premiumService.updatePremium(req, null).toPromise()
    }

    @Mutation(returns => PremiumSuccessType)
    async deletePremium(@Args('input') req: PremiumFindInput) {
        return await this.premiumService.deletePremium(req, null).toPromise()
    }

    @Query(returns => PremiumType, { nullable: true })
    async premium(@Args('input') req: PremiumFindInput) {
        return await this.premiumService.getPremium(req, null).toPromise()
    }

    @Query(returns => [PremiumType], { nullable: true })
    async listPremiums() {
        const result = await this.premiumService.listPremiums(null, null).toPromise()
        return result.premiums
    }

}
