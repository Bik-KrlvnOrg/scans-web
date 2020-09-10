import { IQuery } from "@nestjs/cqrs";

export class GetCoverQuery implements IQuery { 
    constructor(public readonly request:string){}
}