const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodItem = require('./foodItem.model').schema;
const order = require('./order.model').schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    required: true
  },
  //profile pic
  thumbnail : {
    type : String,
  },
  communityItems: {
      type: Array
  },
  orders: {
      type: Array
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;