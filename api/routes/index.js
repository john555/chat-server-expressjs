const express = require('express');

const userRoutes = require('./userRoutes');

const indexRoute = express.Router();

indexRoute.get('/', (request, response) => {
  response.send('Messaging app API.\n');
});

module.exports = {
  indexRoute,
  userRoutes
};
