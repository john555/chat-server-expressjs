const mongoose = require('mongoose');
const userModal = require('./userModel');

const messageSchema = mongoose.Schema({
  body: { type: String },
  createdAt: { type: Date, default: Date.now },
  senderId: { type: String },
  receiverId: { type: String },
});

module.exports = mongoose.model('Message', messageSchema);
