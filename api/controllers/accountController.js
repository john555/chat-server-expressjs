const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

const { isRequired } = require('../../helpers/validation');
const { User } = require('../models');
const { secret } = require('../../config');

/**
 * 
 * @param {*} user 
 */
const login = (request, response) => {
  const fields = ['username', 'password'];

  for (let i = 0; i < fields.length; i++) {
    if (!isRequired(request.body[fields[i]])) {
      response.status(409).json({
        status: 'NOT_OK',
        message: `Missing ${fields[i]}`,
      });
      return;
    }
  }

  const { username, password } = request.body;

  User.findOne({ username }, (error, user) => {
    if(!user) {
      response.status(409).json({
        status: 'NOT_OK',
        message: 'Authentication failed',
      });
      return;
    }
    bcrypt.compare(password, user.password, (error, isValid) => {
      if (isValid){
        const expiry = new Date().getTime() + (3600 * 24 * 7);
        const payload = {
          expiry,
          user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            createdAt: user.createdAt
          },
        }
        
        response.json({
          status: 'OK',
          token: jwt.encode(payload, secret),
        });
        return;
      }

      response.status(409).json({
        status: 'NOT_OK',
        message: 'Authentication failed',
      });
      return;
    });
  });
}

const logout = (token) => {

}

module.exports = {
  login,
  logout,
};
