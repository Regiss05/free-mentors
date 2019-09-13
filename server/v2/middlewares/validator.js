import { check, validationResult } from 'express-validator';

export const validateEmail = [
    check('email')
      .trim()
      .exists({ checkFalsy: true })
      .withMessage('Email is required')
      .isEmail()
      .normalizeEmail()
      .withMessage('Invalid email address'),
]

export const validateAll = (req, res, next) => {
    const validationError = validationResult(req);

  if (!validationError.isEmpty()) {
    const errorMsg = validationError.mapped();

    return res.status(422).json({
      status: 422,
      message: 'Invalid input value',
      error: errorMsg,
    });
  }
  return next();
} 

