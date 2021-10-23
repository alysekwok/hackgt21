const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/orders').get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/orders/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const location = req.body.location;
  const newUser = new User({
      username,
      password,
      location
    });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;