import { Request, Response } from 'express';
import Product from '../../../../database/models/products';
import ProductQuantity from '../../../../database/models/product_quantities';
import async, { compose } from 'async';
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

    return res.status(200).json({
      status: 200,
      message: 'created',
      product,
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
      async (productQuantity: ProductQuantity) => {
        console.log(productQuantities)
        const { quantity, metric } = productQuantity;
        const record = {
          quantity,
          metric,
        };

        await ProductQuantity.create(record);
      },
    );

    return res.status(201).json({
      message: 'created',
      productQuantities,
    });
  }
}

export default ProductController;
