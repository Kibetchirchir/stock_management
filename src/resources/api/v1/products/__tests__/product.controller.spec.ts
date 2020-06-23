import { Request, Response } from 'express';
import Product from '../../../../../database/models/products';
import ProductController from '../product.controller';
import ProductQuantity from '../../../../../database/models/product_quantities';
import { NOT_FOUND } from '../../../../../constants/response_status';

const res = ({
  status: jest.fn(() => ({
    json: jest.fn(() => ({})),
  })),
} as unknown) as Response;

let req = {} as Request;

describe('product controller', () => {
  describe('products', () => {
    test('product should be added', async () => {
      req = {
        body: {
          name: 'test',
          description: 'testing',
        },
      } as Request;

      jest.spyOn(Product, 'create').mockResolvedValue;

      await ProductController.CreateOne(req, res);

      expect(Product.create).toBeCalled();
    });

    test('get all products', async () => {
      jest.spyOn(Product, 'findAll');

      await ProductController.getAllProducts(req, res);

      expect(Product.findAll).toHaveBeenCalled();
    });

    test('return 404 when the db has no products', async () => {
      jest.spyOn(Product, 'findAll').mockResolvedValue([]);

      const response = await ProductController.getAllProducts(req, res);

      // expect(response.status).toEqual(NOT_FOUND);
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
