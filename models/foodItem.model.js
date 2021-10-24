const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const kitchen = require('./kitchen.model').schema;
const foodItemSchema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  Description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  Date: {
      type: Date,
      default: Date.now
  },
  isCommunityItem: {
      type: Boolean,
      default: false
  },
  kitchen: {
      type: Array
  },
  price: {
      type: Number
  }
}, {
  timestamps: true,
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;