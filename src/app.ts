import express, { Request, Response } from 'express';
import cors from 'cors';
import api from './resources/api';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(errors());
app.use(express.json());

app.use('/api', api);
app.use(
  (req: Request, res: Response): Response => {
    return res.status(404).send({ message: 'Route not found' });
  },
);
export default app;
