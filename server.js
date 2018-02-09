const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');
const { port, appUrl } = require('./config');

const app = express();

app.use(compression());
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', routes.indexRoute);
app.use('/api/v1', routes.indexRoute);
app.use('/api/v1/users', routes.userRoutes);

app.listen(port, () => {
  console.log(`Server started at ${appUrl}`);
});
