const Joi = require("joi");

const validateUser = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    userName: Joi.string().required(),
  });

  const result = schema.validate(user);
  return result;
};

const validateLogin = (credentials) => {
  const schema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(credentials);
  return result;
};

const validateEmail = (email) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  const result = schema.validate(email);
  return result;
};

const validateResetPasswordCredentials = (
  email,
  verificationToken,
  password
) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    verificationToken: Joi.string().required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(email, verificationToken, password);
  return result;
};

module.exports = {
  validateUser,
  validateLogin,
  validateEmail,
  validateResetPasswordCredentials,
};
