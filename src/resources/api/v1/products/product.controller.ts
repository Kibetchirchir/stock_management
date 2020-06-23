import { Request, Response } from 'express';
import Product from '../../../../database/models/products';
import ProductQuantity from '../../../../database/models/product_quantities';
import jsonResponse from '../../../../helper/json_response';
import { CREATED, NOT_FOUND, OK } from '../../../../constants/response_status';
/**
 * Product class
 */
class ProductController {
  /**
   *
   * @param { Request } req
   * @param {Response} res
   * @returns {Object} returns an object
   */
  static async createOne(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const record = {
      name,
      description,
    };

    const product = await Product.create(record);

    return jsonResponse({
      res,
      status: CREATED,
      message: 'created',
      data: [product],
    });
  }

  /**
   *
   * @param {Request} req
   * @param {Respnse} res
   * @returns {Response} the response
   */
  static async createProductsQuantity(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const { productQuantities } = req.body;

    const productQuantitiesArray: Array<ProductQuantity> = [];

    for (const productQuantity of productQuantities) {
      const { quantity, metric } = productQuantity;

      const record = {
        quantity,
        metric,
      };

      const dbRecord = await ProductQuantity.create(record);

      productQuantitiesArray.push(dbRecord);
    }
    return jsonResponse({
      res,
      status: CREATED,
      message: 'created',
      data: productQuantitiesArray,
    });
  }
  /**
   * @description gets all products
   * @param {Request} req
   * @param {Response} res
   * @returns {Response} the response and all products
   */
  static async getAllProducts(req: Request, res: Response): Promise<Response> {
    const products = await Product.findAll();

    if (products.length === 0) {
      return jsonResponse({
        res,
        status: NOT_FOUND,
        message: 'no products',
      });
    }

    return jsonResponse({
      res,
      status: OK,
      message: 'products',
      data: products,
    });
  }
}

export default ProductController;
