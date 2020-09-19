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
        synchronize: JSON.parse(process.env.DATABASE_SYNC),
        entities: [__dirname + '/../../**/*.entity.{js,ts}'],
        logging: JSON.parse(process.env.DATABASE_LOG),
        dropSchema: JSON.parse(process.env.DATABASE_DROP_SCHEMA)
    },
    benefitSVC: {
        transport: Transport.GRPC,
        options: {
            url: `${process.env.BENEFIT_SVC_URL}`,
            protoPath: join(__dirname, 'dist/libs/benefit.proto'),
            package: `${process.env.BENEFIT_PROTO_PACKAGE}`,
        }
    }
})