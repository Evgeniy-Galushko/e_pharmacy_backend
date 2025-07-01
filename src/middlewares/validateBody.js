import createHttpError from 'http-errors';

export const validateBody = (shema) => async (req, res, next) => {
  try {
    await shema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const error = createHttpError(400, 'The request is not valid', {
      errors: err.details,
    });
    next(error);
  }
};
