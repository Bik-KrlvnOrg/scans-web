import { IQuery } from "@nestjs/cqrs";

export class GetGroupQuery implements IQuery { 
    constructor(public readonly request:string){}
}