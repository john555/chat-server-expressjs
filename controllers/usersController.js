const { User } = require('../models');

const createUser = (request, response) => {
  // const user = new User();
  response.json(request.body);
  // user.save((error, user) => {
  //   if (error) {
  //     response.status(500).json({
  //       message: 'Could not create user.'
  //     });
  //   }

  //   response.status(201).json({
  //     status: 'OK',
  //     user: {
  //       id: user.id,
  //       name: user.name,
  //     }
  //   });
  // });
}

const getUsers = (request, response) => {
  User.find((error, users) => {
    if (error) {
      response.status(500).json({
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
