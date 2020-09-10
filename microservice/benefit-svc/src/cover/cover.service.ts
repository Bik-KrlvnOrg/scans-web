import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Cover } from 'src/_proto/benefit';
import { CreateCoverCommand, UpdateCoverCommand, DeleteCoverCommand } from './command';
import { GetCoversQuery, GetCoverQuery } from './query';

@Injectable()
export class CoverService {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }

    async listCovers(data: any) {
        return await this.queryBus.execute(new GetCoversQuery(data))
    }

    async createCover(data: Cover) {
        return await this.commandBus.execute(new CreateCoverCommand(data))
    }

    async getCover(data: string) {
        return await this.queryBus.execute(new GetCoverQuery(data))
    }

    async updateCover(data: Cover) {
        return await this.commandBus.execute(new UpdateCoverCommand(data))
    }

    async deleteCover(data: string) {
        return await this.commandBus.execute(new DeleteCoverCommand(data))
    }

}
