const mongoose = require('mongoose');
const config = require('../config');
const User = require('./userModal');

mongoose.connect(config.databaseUrl);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('MONGO: CONNECTION opened.\n');
});

db.once('disconnected', function callback() {
  console.log('MONGO: CONNECTION lost.\n');
});

process.on('SIGINT', () => {  
  db.close(() => { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

module.exports = {
  User,
}
