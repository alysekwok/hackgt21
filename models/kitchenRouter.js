const express = require('express');
const router = express.Router();



router.get('/kitchen', (req, res) => {
    const kitchens = [
        {id : 1, firstName: 'John', lastName: 'Doe'},
        {id : 2, firstName: 'Ishaan', lastName: 'Guha'},
        {id : 3, firstName: 'John', lastName: 'Doe'},
    ];
    res.json(customers);
});

module.exports = router;
