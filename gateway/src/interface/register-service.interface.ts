import { RegisterServiceClient, MedicalServiceClient } from "src/_proto/register";

export interface IRegisterRpcService extends RegisterServiceClient<any> { }

export interface IMedicalRpcService extends MedicalServiceClient<any> { }