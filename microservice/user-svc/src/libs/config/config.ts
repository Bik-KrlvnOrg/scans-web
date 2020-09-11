export const config = () => ({
    database: {
        type: 'event-store',
        tcpEndpoint: {
            host: process.env.ES_HOST,
            port: Number(process.env.ES_PORT)
        },
        options: {
            defaultUserCredentials: {
                username: process.env.ES_USER,
                password: process.env.ES_PASSWORD
            }

        }
    }
})