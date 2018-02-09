const { databaseUrl } = require('../config');

module.exports = (mongoose) => {
  return (request, response, next) => {
    response.on('end', () => {  
      mongoose.connection.close(); 
    });
  
    mongoose.connect(databaseUrl);
    next();
  }
}
