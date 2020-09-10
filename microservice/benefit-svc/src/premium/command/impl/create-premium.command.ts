import { ICommand } from '@nestjs/cqrs'
import {   Premium } from 'src/_proto/benefit';

export class CreatePremiumCommand implements ICommand {
    constructor(public readonly cmd: Premium) { }
}