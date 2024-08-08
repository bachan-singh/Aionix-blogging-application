const response = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  response.error(res, err);
};

module.exports = errorHandler;
