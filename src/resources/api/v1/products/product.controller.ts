import { Request, Response } from 'express';
import Product from '../../../../database/models/products';
import ProductQuantity from '../../../../database/models/product_quantities';
import async from 'async';
import jsonResponse from '../../../../helper/json_response';
import { CREATED } from '../../../../constants/response_status';
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
  static async CreateOne(req: Request, res: Response): Promise<Response> {
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

    async.eachOf(
      productQuantities,
      async (
        productQuantity: ProductQuantity,
        index: number | string,
        callback: any,
      ) => {
        console.log(index);
        const { quantity, metric } = productQuantity;
        const record = {
          quantity,
          metric,
        };

        await ProductQuantity.create(record);
        callback();
      },
    );

    return jsonResponse({
      res,
      status: CREATED,
      message: 'created',
      data: productQuantities,
    });
  }
}

export default ProductController;
