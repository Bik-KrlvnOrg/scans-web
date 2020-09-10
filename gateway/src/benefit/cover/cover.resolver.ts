import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { OnModuleInit, Inject } from '@nestjs/common';
import { PROVIDERS } from 'src/libs';
import { ClientGrpc } from '@nestjs/microservices';
import { ICoverService } from 'src/interface/benefit-service.interface';
import { CoverInput, CoverFindInput } from './cover.input';
import { CoverType, CoverSuccessType } from './cover.type';

@Resolver()
export class CoverResolver implements OnModuleInit {
    constructor(@Inject(PROVIDERS.BENEFIT_CLIENT) private readonly client: ClientGrpc) { }
    private coverService: ICoverService

    onModuleInit() {
        this.coverService = this.client.getService<ICoverService>('CoverService');
    }

    @Mutation(returns => CoverType)
    async createCover(@Args('input') req: CoverInput) {
        return await this.coverService.createCover(req).toPromise();
    }

    @Mutation(returns => CoverSuccessType, { nullable: true })
    async updateCover(@Args('input') req: CoverInput) {
        const result = await this.coverService.updateCover(req).toPromise();
        console.log('resup', result)
        return result
    }

    @Mutation(returns => CoverSuccessType)
    async deleteCover(@Args('input') req: CoverFindInput) {
        return await this.coverService.deleteCover(req).toPromise();
    }

    @Query(returns => [CoverType], { nullable: true })
    async listCovers() {
        const result = await this.coverService.listCovers(null).toPromise();
        console.log('res', result)
        return result.covers;
    }

    @Query(returns => CoverType, { nullable: true })
    async cover(@Args('input') req: CoverFindInput) {
        const result = await this.coverService.getCover(req).toPromise();
        console.log('res', result)
        return result
    }
}
