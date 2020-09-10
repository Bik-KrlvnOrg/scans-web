import { IQuery } from "@nestjs/cqrs";

export class GetPremiumsQuery implements IQuery { 
    constructor(public readonly request:any){}
}