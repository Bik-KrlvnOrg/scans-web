import { IQuery } from "@nestjs/cqrs";

export class GetPremiumQuery implements IQuery { 
    constructor(public readonly request:string){}
}