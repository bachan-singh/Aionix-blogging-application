const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const response = require('../utils/response');

const authController = {
  signup: (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
      if (err) {
        return response.error(res, err);
      }
      User.create({ ...req.body, password: hashedPassword }, (err, result) => {
        if (err) {
          return response.error(res, err);
        }
        response.success(res, result, 'User registered successfully');
      });
    });
  },

  login: (req, res) => {
    User.findByEmail(req.body.email, (err, users) => {
      if (err) {
        return response.error(res, err);
      }
      if (users.length === 0) {
        return response.error(res, 'Invalid email or password', 401);
      }
      const user = users[0];
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return response.error(res, 'Invalid email or password', 401);
        }
        const token = jwt.sign({ id: user.id }, "jwtSecretKey");
        response.success(res, { token }, 'Login successful');
      });
    });
  },
};

module.exports = authController;
