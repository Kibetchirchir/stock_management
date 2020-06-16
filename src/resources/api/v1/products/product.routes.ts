import { Router } from 'express';
import ProductController from './product.controller';
import {
  productValidator,
  productQuantityValidator,
} from './product.validator';

const router = Router();

router.post('/', productValidator, ProductController.CreateOne);

router.post(
  '/quantites',
  productQuantityValidator,
  ProductController.createProductsQuantity,
);

export default router;
