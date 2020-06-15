import { Router } from 'express';
import ProductController from './product.controller';
import { productValidator } from './product.validator';

const router = Router();

router.post('/', productValidator, ProductController.CreateOne);

export default router;
