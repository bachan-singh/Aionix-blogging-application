const response = {
    success: (res, data) => {
      res.status(200).json(data);
    },
    error: (res, error, status = 500) => {
      res.status(status).json({ message: error.message || error });
    },
  };
  
  module.exports = response;
  