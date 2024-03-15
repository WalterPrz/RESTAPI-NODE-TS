import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DB_NAME: env.get('DB_NAME').required().asString(),
    DB_USER: env.get('DB_USER').required().asString(),
    DB_PASSWORD: env.get('DB_PASSWORD').required().asString(),
    DB_HOST: env.get('DB_HOST').asString(),
    DB_PORT: env.get('DB_PORT').asPortNumber(),
};
