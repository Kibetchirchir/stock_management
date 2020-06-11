import { Request, Response } from 'express';
import Product from '../../../../../database/models/products';
import ProductController from '../product.controller';

describe('product controller', () => {
  const res = ({
    status: jest.fn(() => ({
      json: jest.fn(() => ({})),
    })),
  } as unknown) as Response;
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
});
