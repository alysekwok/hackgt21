const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodItem = require('./foodItem.model').schema;
const user = require('./user.model').schema;
const order = require('./order.model').schema;


const kitchenSchema = new Schema({
  user: {
    type: Array
  },
  location: {
    type: [Number]
  },
  dishes: {
    type: Array
  },
  currOrders: {
      type: Array
  }
}, {
  timestamps: true,
});

const Kitchen = mongoose.model('Kitchen', kitchenSchema);

module.exports = Kitchen;