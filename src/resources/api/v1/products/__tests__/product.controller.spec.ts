import { Request, Response } from 'express';
import Product from '../../../../../database/models/products';
import ProductController from '../product.controller';
import ProductQuantity from '../../../../../database/models/product_quantities';

const res = ({
  status: jest.fn(() => ({
    json: jest.fn(() => ({})),
  })),
} as unknown) as Response;

describe('product controller', () => {
  describe('products', () => {
    test('product should be added', async () => {
      const req = {
        body: {
          name: 'test',
          description: 'testing',
        },
      } as Request;

      jest.spyOn(Product, 'create').mockResolvedValue;

      await ProductController.CreateOne(req, res);

      expect(Product.create).toBeCalled();
    });
  });
  describe('productsQuantity', () => {
    const req = {
      body: {
        productQuantities: [
          {
            quantity: 3,
            metric: 'KGS',
          },
          {
            quantity: 3,
            metric: 'KGS',
          },
        ],
      },
    } as Request;
    test('should add quantities', async () => {
      jest.spyOn(ProductQuantity, 'create');

      await ProductController.createProductsQuantity(req, res);

      expect(ProductQuantity.create).toHaveBeenCalledTimes(2);
    });
  });
});
