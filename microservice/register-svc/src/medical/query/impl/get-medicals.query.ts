import { IQuery } from "@nestjs/cqrs";
import { FindMedialsRequest } from "src/_proto/register";

export class GetMedicalsQuery implements IQuery { 
    constructor(public readonly request:FindMedialsRequest){}
}