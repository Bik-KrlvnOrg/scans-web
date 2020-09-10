import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { ClientGrpc } from "@nestjs/microservices";
import { OnModuleInit, Inject } from "@nestjs/common";
import { IRegisterRpcService } from "../interface/register-service.interface";
import { CreateRegisterInput } from "./membership.input";
import { RegisterResponseType } from "./membership.type";
import { PROVIDERS } from "src/libs/common";

@Resolver()
export class MembershipMutationResolver implements OnModuleInit {
    constructor(@Inject(PROVIDERS.REGISTER_CLIENT) private readonly client: ClientGrpc) { }

    private registerRpc: IRegisterRpcService
    onModuleInit(): void {
        this.registerRpc = this.client.getService<IRegisterRpcService>('RegisterService')
    }

    @Mutation(returns => RegisterResponseType)
    async createMembership(@Args('input') register: CreateRegisterInput) {
        const result = await this.registerRpc.createRegister(register).toPromise()
        console.log('rs',result)
        return result
    }
}