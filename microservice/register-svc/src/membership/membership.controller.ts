import { Controller } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateRegisterRequest } from 'src/_proto/register';

@Controller('membership')
export class MembershipController {
    constructor(private readonly membershipService: MembershipService) { }

    @GrpcMethod('RegisterService', 'CreateRegister')
    async registerPolicy(req: CreateRegisterRequest) {
        return this.membershipService.createMembership(req.register)
    }
}
