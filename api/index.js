const express = require('express');
const api = express();

const routes = require('./routes');

api.use('/', routes.indexRoute);
api.use('/users', routes.userRoutes);
api.use('/account', routes.accountRoutes);

module.exports = {
  api,
};
