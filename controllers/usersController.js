const { User } = require('../models');

const createUser = (request, response) => {
  const { firstName, lastName } = request.body;
  const user = new User({
    name: `${firstName} ${lastName}`
  });
  
  user.save((error, user) => {
    if (error) {
      response.status(409).json({
        message: 'Could not create user.'
      });
    }

    response.status(201).json({
      status: 'OK',
      user
    });
  });
}

const getUsers = (request, response) => {
  User.find({}, (error, users) => {
    if (error) {
      response.status(409).json({
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
