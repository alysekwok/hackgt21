const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodItem = require('./foodItem.model').schema;
const user = require('./user.model').schema;

const orderSchema = new Schema({
  dOrP: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  price: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  address: {
    type: String,
  },
  user: {
      type: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  item: {
      type: { type: Schema.Types.ObjectId, ref: 'FoodItem' }
  },
  completed: {
      type: Boolean,
      default: false
  }
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;