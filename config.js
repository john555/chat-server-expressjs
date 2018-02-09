const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

let databaseUrl = 'mongodb://localhost/chatDb';
if (env === 'test') {
  databaseUrl = 'mongodb://localhost/chatDbTest';
}

if (env === 'development') {
  databaseUrl = 'mongodb://localhost/chatDbDev';
}

module.exports = {
  databaseUrl,
  appUrl: `http://localhost:${port}`,
  port,
};
