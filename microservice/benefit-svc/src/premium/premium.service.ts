import { Injectable, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Premium } from 'src/_proto/benefit';
import { GetPremiumQuery, GetPremiumsQuery } from './query';
import { CreatePremiumCommand, DeletePremiumCommand, UpdatePremiumCommand } from './command';

@Injectable()
export class PremiumService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus) { }
    logger = new Logger(this.constructor.name)

    async createPremium(data: Premium) {
        return await this.commandBus.execute(new CreatePremiumCommand(data));
    }

    async updatePremium(data: Premium) {
        return await this.commandBus.execute(new UpdatePremiumCommand(data));
    }

    async deletePremium(data: string) {
        return await this.commandBus.execute(new DeletePremiumCommand(data));
    }

    async getPremium(data: string) {
        return await this.queryBus.execute(new GetPremiumQuery(data));
    }

    async listPremiums(data: any) {
        return await this.queryBus.execute(new GetPremiumsQuery(data));
    }
}
