import dotenv from 'dotenv';

dotenv.config();

const serverConfig: any = {
    PORT: process.env.PORT,
    MAX_LIMIT: process.env.MAX_LIMIT,
};

export default serverConfig;