const { UnauthorizedError } = require('../utils/api-errors');

/**
 *
 * @param roles
 */
module.exports = (roles) => async (req, res, next) => {
  if (!req.user.role || !roles.includes(req.user.role)) {
    throw new UnauthorizedError();
  }
  return next();
};
