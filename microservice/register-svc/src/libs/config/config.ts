import { Transport } from "@nestjs/microservices";
import { join } from "path";

export const config = () => ({
    database: {
        name: 'default',
        type: 'postgres',
        database: process.env.DATABASE_DB,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        synchronize: true,
        entities: [__dirname + '/../../**/*.entity.{js,ts}'],
        logging: process.env.DATABASE_LOG,
        dropSchema: process.env.DATABASE_DROP_SCHEMA
    },
    registerSVC: {
        transport: Transport.GRPC,
        options: {
            url: `${process.env.REGISTER_SVC_URL}`,
            protoPath: join(__dirname, 'dist/libs/register.proto'),
            package: `${process.env.REGISTER_PROTO_PACKAGE}`,
        }
    }
})