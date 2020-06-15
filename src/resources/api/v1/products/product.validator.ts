import { Joi, celebrate } from 'celebrate';

export const productValidator = celebrate({
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
  },
});
