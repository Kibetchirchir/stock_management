import { Router } from 'express';
import ProductController from './product.controller';
import {
  productValidator,
  productQuantityValidator,
} from './product.validator';
import asyncHandler from '../../../../middleware/async_handler';

const router = Router();

router.post('/', productValidator, asyncHandler(ProductController.CreateOne));

router.post(
  '/quantites',
  productQuantityValidator,
  asyncHandler(ProductController.createProductsQuantity),
);

export default router;
