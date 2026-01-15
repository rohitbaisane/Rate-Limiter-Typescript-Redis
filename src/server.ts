import express from 'express';

const app = express();

import {
    checkIsRequestAllowed
} from './controllers/rateLimitController.ts';
import serverConfig from './config/config.ts';


app.get('/check', checkIsRequestAllowed);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is listening on ${serverConfig.PORT}`);
});