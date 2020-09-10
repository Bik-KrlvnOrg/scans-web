import { Observable } from "rxjs";
import { CreateRegisterRequest, RegisterResponse } from "src/_proto/register";

export interface IRegisterRpcService{
    createRegister(req:CreateRegisterRequest):Observable<RegisterResponse>
}