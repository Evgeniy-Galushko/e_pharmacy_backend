import Joi from 'joi';

export const validationOrderSchema = Joi.object({
  name: Joi.string().min(5).max(30).required().messages({
    'string.base': 'Username should be a string!',
    'string.min': 'Minimum number of characters in a name is 5!',
    'string.max': 'The maximum number of characters in a name is 30!',
    'any.required': 'Name is required!',
  }),
  email: Joi.string().required().messages({
    'string.base': 'Email must be in the form of a string!',
    'any.required': 'Email is required!',
  }),
  phoneNumber: Joi.string().min(10).max(13).required().messages({
    'string.base': 'Phone number must be in the form of a string!',
    'string.min': 'Minimum number length is 9 characters!',
    'string.max': 'Maximum number length is 13 characters!',
    'any.required': 'Phone number is required!',
  }),
  address: Joi.string().min(10).max(50).required().messages({
    'string.base': 'The address must be in the form of a string!',
    'string.min': 'The minimum length of the address string is 10 characters!',
    'string.max': 'The maximum length of the address string is 50 characters!',
    'any.required': 'Address is required!',
  }),
  products: Joi.array().required().messages({
    'any.required': 'Products is required!',
  }),
  paymentMethod: Joi.string().required().messages({
    'string.base': 'Payment method must be a string!',
    'any.required': 'Payment method is required!',
  }),
  price: Joi.string().min(5).max(20).required().messages({
    'string.base': 'Price must be in the form of a string!',
    'string.min': 'Minimum length of the line price 5 characters!',
    'string.max': 'Maximum length of the line price 20 characters!',
    'any.required': 'Price is required!',
  }),
  order_date: Joi.string().min(5).max(20).required().messages({
    'string.base': 'Order date must be a string!',
    'string.min': 'Minimum length of date string is 5 characters!',
    'string.max': 'Maximum length of date string is 20 characters!',
    'any.required': 'Order date is required!',
  }),
});
