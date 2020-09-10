import { IQuery } from "@nestjs/cqrs";
import { GetMedicalRequest, ListMedicalsRequest } from "src/_proto/register";

export class GetMedicalsQuery implements IQuery { 
    constructor(public readonly request:ListMedicalsRequest){}
}