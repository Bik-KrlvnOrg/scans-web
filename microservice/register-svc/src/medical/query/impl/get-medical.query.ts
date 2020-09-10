import { IQuery } from "@nestjs/cqrs";

export class GetMedicalQuery implements IQuery { 
    constructor(public readonly request:string){}
}