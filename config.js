const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const secret = process.env.SECRET;

if (!secret) {
  throw new Error('SECRET is not set in the environment variables');
}

const config = {
  development: {
    databaseUrl: 'mongodb://localhost/chatDbDev',
    appUrl: `http://localhost:${port}`,
    port,
    secret,
  },
  testing: {
    databaseUrl: 'mongodb://localhost/chatDbTest',
    appUrl: `http://localhost:${port}`,
    port,
    secret,
  },
  production: {
    databaseUrl: 'mongodb://localhost/chatDb',
    appUrl: `http://localhost:${port}`,
    port,
    secret,
  }
}

module.exports = config[env];
