import { Model, DataTypes } from 'sequelize';

import sequelize from './index';

/**
 * Product model
 */
class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Product.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: 'products',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Product;
