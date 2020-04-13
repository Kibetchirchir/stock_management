import { Router } from 'express';
// import v1 from './v1';

const router = Router();

router.use('/v1', (req: any, res: any): any => {
  res.send('hello world');
});

export default router;
