import { RegisterServiceClient, MedicalServiceClient, GroupServiceClient } from "src/_proto/register";

export interface IRegisterRpcService extends RegisterServiceClient<any> { }

export interface IMedicalRpcService extends MedicalServiceClient<any> { }

export interface IGroupRpcService extends GroupServiceClient<any>{}