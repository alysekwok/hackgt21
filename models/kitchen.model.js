const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodItem = require('./foodItem.model').schema;
const user = require('./user.model').schema;
const order = require('./order.model').schema;


const kitchenSchema = new Schema({
  user: {
    type: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  location: {
    type: [Number]
  },
  dishes: {
    type: [{ type: Schema.Types.ObjectId, ref: 'FoodItem' }]
  },
  currOrders: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
  }
}, {
  timestamps: true,
});

const Kitchen = mongoose.model('Kitchen', kitchenSchema);

module.exports = Kitchen;