import { ICommand } from '@nestjs/cqrs'
import { Premium } from 'src/_proto/benefit';

export class UpdatePremiumCommand implements ICommand {
    constructor(public readonly cmd: Premium) { }
}