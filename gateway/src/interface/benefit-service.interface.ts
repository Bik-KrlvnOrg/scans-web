import { PremiumServiceClient, CoverServiceClient } from "src/_proto/benefit";

export interface IPremiumService extends PremiumServiceClient<any> { }
export interface ICoverService extends CoverServiceClient<any> { }