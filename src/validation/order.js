import Joi from 'joi';

export const validationOrderSchema = Joi.object({
  photo: Joi.string().required().messages({
    'string.base': 'The link to the photo must be in the form of a string',
    'any.required': 'Link to photo is required!',
  }),
  name: Joi.string().min(5).max(30).required().messages({
    'string.base': 'Username should be a string!',
    'string.min': 'Minimum number of characters in a name is 5!',
    'string.max': 'The maximum number of characters in a name is 30!',
    'any.required': 'Name is required!',
  }),
  address: Joi.string().min(10).max(50).required().messages({
    'string.base': 'The address must be in the form of a string!',
    'string.min': 'The minimum length of the address string is 10 characters!',
    'string.max': 'The maximum length of the address string is 50 characters!',
    'any.required': 'Address is required!',
  }),
  products: Joi.string().min(2).max(20).required().messages({
    'string.base': 'Products must be in string format!',
    'string.min': 'Minimum length of string products 2 characters!',
    'string.max': 'Maximum length of string products 20 characters!',
    'any.required': 'Products is required!',
  }),
  price: Joi.string().min(5).max(20).required().messages({
    'string.base': 'Price must be in the form of a string!',
    'string.min': 'Minimum length of the line price 5 characters!',
    'string.max': 'Maximum length of the line price 20 characters!',
    'any.required': 'Price is required!',
  }),
  status: Joi.string().min(5).max(20).required().messages({
    'string.base': 'Status must be in the form of a string!',
    'string.min': 'Minimum length of the status string is 5 characters!',
    'string.max': 'Maximum length of the status string is 20 characters!',
    'any.required': 'Status is required!',
  }),
  order_date: Joi.string().min(5).max(20).required().messages({
    'string.base': 'Order date must be a string!',
    'string.min': 'Minimum length of date string is 5 characters!',
    'string.max': 'Maximum length of date string is 20 characters!',
    'any.required': 'Order date is required!',
  }),
});
