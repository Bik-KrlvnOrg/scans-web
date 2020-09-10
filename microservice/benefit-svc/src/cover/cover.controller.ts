import { Controller } from '@nestjs/common';
import { CoverService } from './cover.service';
import { CreateCoverRequest, DeleteCoverRequest, UpdateCoverRequest, ListCoversRequest, GetCoverRequest } from 'src/_proto/benefit';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('cover')
export class CoverController {
    constructor(private readonly coverService: CoverService) { }

    @GrpcMethod('CoverService', 'CreateCover')
    async createCover(req: CreateCoverRequest) {
        return await this.coverService.createCover(req.cover)
    }

    @GrpcMethod('CoverService', 'ListCovers')
    async getCovers(req: ListCoversRequest) {
        return await this.coverService.listCovers(req)
    }

    @GrpcMethod('CoverService', 'GetCover')
    async getCover(req: GetCoverRequest) {
        return await this.coverService.getCover(req.id)
    }
    
    @GrpcMethod('CoverService', 'UpdateCover')
    async updateCover(req: UpdateCoverRequest) {
        return await this.coverService.updateCover(req.cover)
    }

    @GrpcMethod('CoverService', 'DeleteCover')
    async deleteCover(req: DeleteCoverRequest) {
        return await this.coverService.deleteCover(req.id)
    }

}
