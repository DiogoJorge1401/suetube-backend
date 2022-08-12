import cors from 'cors';
import 'dotenv/config';
import e from 'express';
import './database/connection';
import { routes } from './routes/routes';

const app = e()

app.use(e.json())
app.use(cors())
app.use('/api', routes)

const PORT = process.env.PORT

app.listen(PORT, () => console.log("The Server Is On!"))