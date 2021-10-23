const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodItem = require('./foodItem.model').schema;
const order = require('./order.model').schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  location: {
    type: [Number],
    required: true
  },
  communityItems: {
      type: [{ type: Schema.Types.ObjectId, ref: 'FoodItem' }]
  },
  orders: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;