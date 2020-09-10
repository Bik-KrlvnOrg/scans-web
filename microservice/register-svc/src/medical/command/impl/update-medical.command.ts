import { ICommand } from "@nestjs/cqrs";
import {  UpdateMedicalRequest } from "src/_proto/register";

export class UpdateMedicalCommand implements ICommand {
    constructor(public readonly cmd: UpdateMedicalRequest) { }
}