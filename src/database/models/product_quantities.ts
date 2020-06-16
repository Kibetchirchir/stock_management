import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

/**
 * Product quantities mode
 */
class ProductQuantity extends Model {
  public id!: number;
  public quantity!: number;
  public metric!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ProductQuantity.init(
  {
    quantity: DataTypes.NUMBER,
    metric: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'products_quantities',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default ProductQuantity;
