import dotenv from 'dotenv';

dotenv.config();

import { Sequelize } from 'sequelize';
const DBConfig = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const config = DBConfig[env];

export const sequelize = new Sequelize(
  process.env[config.use_env_variable] as string,
  config,
);

export default sequelize;
