import { Router } from 'express';
import ProductController from './product.controller';
import {
  productValidator,
  productQuantityValidator,
  productTypesValidator,
} from './product.validator';
import asyncHandler from '../../../../middleware/async_handler';

const router = Router();

router.post('/', productValidator, asyncHandler(ProductController.createOne));

router.get('/', asyncHandler(ProductController.getAllProducts));

router.post(
  '/quantites',
  productQuantityValidator,
  asyncHandler(ProductController.createProductsQuantity),
);

router.post(
  '/:id/types',
  productTypesValidator,
  asyncHandler(ProductController.createProductTypes),
);

export default router;
