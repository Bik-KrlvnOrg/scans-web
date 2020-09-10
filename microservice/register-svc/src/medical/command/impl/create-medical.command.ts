import { ICommand } from '@nestjs/cqrs'
import { CreateMedicalRequest } from 'src/_proto/register';

export class CreateMedicalCommand implements ICommand {
    constructor(public readonly cmd: CreateMedicalRequest) { }
}