import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
/**
 * Model class for product type
 */
class ProductType extends Model {
  public id!: number;
  public quantity!: number;
  public metric!: string;
  public product_id!: number;

  readonly created_at!: Date;
  readonly updated_at!: Date;
}

ProductType.init(
  {
    quantity: DataTypes.NUMBER,
    metric: DataTypes.STRING,
    product_id: DataTypes.NUMBER,
  },
  {
    sequelize,
    tableName: 'products_types',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default ProductType;
