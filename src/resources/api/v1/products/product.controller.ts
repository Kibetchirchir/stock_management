import { Request, Response } from 'express';
import Product from '../../../../database/models/products';
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
  static async CreateOne(req: Request, res: Response): Promise<any> {
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
}

export default ProductController;
