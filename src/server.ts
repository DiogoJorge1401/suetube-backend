import cors from 'cors';
import cookie from 'cookie-parser';
import 'dotenv/config';
import e from 'express';
import './db/connection';
import { routes } from './routes/routes';
import { handleErrors } from './middlewares/handleErrors';

const app = e();

app.use(e.json());
app.use(cookie());
app.use(cors({ origin: true, credentials: true }));
app.use('/api', routes);
routes.use(handleErrors);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('The Server Is On!'));
