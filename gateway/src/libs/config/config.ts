import { Transport } from "@nestjs/microservices"
import { join } from "path"

export const config = () => ({
    registerRpc: {
        transport: Transport.GRPC,
        options: {
            url: `${process.env.REGISTER_SVC_URL}`,
            package: `${process.env.REGISTER_SVC_PACKAGE}`,
            protoPath: join(__dirname, '../register.proto')
        }
    },
    benefitRpc: {
        transport: Transport.GRPC,
        options: {
            url: `${process.env.BENEFIT_SVC_URL}`,
            package: `${process.env.BENEFIT_SVC_PACKAGE}`,
            protoPath: join(__dirname, '../benefit.proto')
        }
    },
    userRpc: {
        transport: Transport.GRPC,
        options: {
            url: `${process.env.USER_SVC_URL}`,
            package: `${process.env.USER_PROTO_PACKAGE}`,
            protoPath: join(__dirname, '../user.proto')
        }
    }

})