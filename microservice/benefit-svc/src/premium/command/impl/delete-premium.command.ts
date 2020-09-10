import { ICommand } from '@nestjs/cqrs'
export class DeletePremiumCommand implements ICommand {
    constructor(public readonly cmd: string) { }
}