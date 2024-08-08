const jwt = require('jsonwebtoken');
const response = require('../utils/response');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return response.error(res, 'Access denied', 401);
  }

  try {
    const decoded = jwt.verify(token, "jwtSecretKey");
    req.user = decoded;
    next();
  } catch (error) {
    response.error(res, 'Invalid token', 401);
  }
};

module.exports = authMiddleware;
