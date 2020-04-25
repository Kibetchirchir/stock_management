import { Router } from 'express';
// import v1 from './v1';
import { Request, Response } from 'express';

const router = Router();

router.use('/v1', (req: Request, res: Response): void => {
  res.send('hello world');
});

export default router;
