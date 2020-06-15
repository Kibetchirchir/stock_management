import { Router } from 'express';
import products from './products/product.routes';

const router = Router();

router.use('/products', products);

export default router;
