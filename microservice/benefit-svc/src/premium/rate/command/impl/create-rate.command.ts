import { ICommand } from '@nestjs/cqrs'
import { Rate } from 'src/_proto/benefit';

export class CreateRateCommand implements ICommand {
    constructor(public readonly cmd: Rate[]) { }
}