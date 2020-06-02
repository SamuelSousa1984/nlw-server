import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import {resolve} from 'path';

import routes from './routes';

const app = express();

app.use(helmet());
app.use(cors())
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(resolve(__dirname, '..','uploads')));

export default app;