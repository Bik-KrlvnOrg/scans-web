import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Rate } from 'src/_proto/benefit';
import { CreateRateCommand } from './command';

@Injectable()
export class RateService {
    constructor(private readonly commandBus: CommandBus) { }
    async createRate(data: Rate[]) {
        return await this.commandBus.execute(new CreateRateCommand(data))
    }
}
