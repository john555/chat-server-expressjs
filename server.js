const express = require('express');
const feathers = require('@feathersjs/express');
const compression = require('compression');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressEnd = require('express-end');
const mongoose = require('mongoose');

const connectionManager = require('./middlewares/connectionManager');
const routes = require('./routes');
const { port, appUrl } = require('./config');

const app = express(feathers());

mongoose.connection.on('error', console.error.bind(console, 'Mongoose: Connection error.'));
mongoose.connection.once('open', console.log.bind(console, 'Mongoose: Connection opened.'));
mongoose.connection.once('disconnected', console.log.bind(console, 'Mongoose: Connection closed.'));

app.use(expressEnd);
app.use(compression());
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes.indexRoute);
app.use('/api/v1', routes.indexRoute);
app.use('/api/v1/*', connectionManager(mongoose)); 

app.use('/api/v1/users', routes.userRoutes);

app.listen(port, () => {
  console.log(`Server started at ${appUrl}`);
});
