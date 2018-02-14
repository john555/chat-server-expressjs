const { User } = require('../models');
const { isRequired, minLength } = require('../helpers/validation');

const createUser = (request, response) => {
  const fields = ['firstName', 'lastName', 'username', 'password'];
  const minPasswordLength = 8;

  for (let i = 0; i < fields.length; i++) {
    if (!isRequired(request.body[fields[i]])) {
      response.status(409).json({
        status: 'NOT_OK',
        message: `Missing ${fields[i]}`
      });
      return;
    }
  }

  if (!minLength(request.body.password, minPasswordLength)) {
    response.json({
      status: 'NOT_OK',
      message: `Password must be at least ${minPasswordLength}`
    });

    return;
  }

  const user = new User({
    ...request.body,
  });

  User.findOne({username: 'request.body.username'}, (error, user) => {
    if (user) {
      response.status(409).json({
        status: 'NOT_OK',
        message: 'Username is taken'
      });
      return;
    }
  });

  user.save((error, user) => {
    if (error) {
      // console.log('bbbb', error);
      response.status(409).json({
        status: 'NOT_OK',
        message: 'Username is taken'
      });
      return;
    }

    if (user) {
      response.status(201).json({
        status: 'OK',
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          createdAt: user.createdAt
        }
      });
      return;
    }
  });
}

const getUsers = (request, response) => {
  User.find({}, (error, users) => {
    if (error) {
      response.status(409).json({
        status: 'NOT_OK',
        message: 'Could not get users.'
      });
    }

    response.json(users);
  });
}

module.exports = {
  getUsers,
  createUser,
};
