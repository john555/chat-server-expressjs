const express = require('express');
const api = express();

const routes = require('./routes');

api.use('/', routes.indexRoute);
api.use('/users', routes.userRoutes);

module.exports = {
  api,
};
