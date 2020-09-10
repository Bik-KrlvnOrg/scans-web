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
    }

})