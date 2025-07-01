import Joi from 'joi';

export const registerUserShema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  password: Joi.string().required(),
});

export const loginUserShema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
