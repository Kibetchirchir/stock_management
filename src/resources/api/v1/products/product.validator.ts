import { Joi, celebrate } from 'celebrate';

export const productValidator = celebrate({
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
  },
});

export const productQuantityValidator = celebrate({
  body: {
    productQuantities: Joi.array()
      .items(
        Joi.object().keys({ quantity: Joi.number(), metric: Joi.string() }),
      )
      .required(),
  },
});

export const productTypesValidator = celebrate({
  params: {
    id: Joi.number().required(),
  },
  body: {
    quantity: Joi.number().required(),
    metric: Joi.string().required(),
  },
});

export const oneProductValidator = celebrate({
  params: {
    id: Joi.number().required(),
  },
});
