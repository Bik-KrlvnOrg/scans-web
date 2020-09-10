import { IQuery } from "@nestjs/cqrs";

export class GetCoversQuery implements IQuery { 
    constructor(public readonly request:any){}
}