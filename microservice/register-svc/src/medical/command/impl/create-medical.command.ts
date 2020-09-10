import { ICommand } from '@nestjs/cqrs'
import {  Medical } from 'src/_proto/register';

export class CreateMedicalCommand implements ICommand {
    constructor(public readonly cmd: Medical[]) { }
}