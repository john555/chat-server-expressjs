const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
