const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id : 1, firstName: 'John', lastName: 'Doe'},
        {id : 2, firstName: 'Ishaan', lastName: 'Guha'},
        {id : 3, firstName: 'John', lastName: 'Doe'},
    ];
    res.json(customers);
});

app.get('/api/kitchen', (req, res) => {
    const customers = [
        {id : 1, firstName: 'John', lastName: 'Doe'},
        {id : 2, firstName: 'Ishaan', lastName: 'Guha'},
        {id : 3, firstName: 'John', lastName: 'Doe'},
    ];
    res.json(customers);
});

app.get('/api/food', (req, res) => {
    const customers = [
        {id : 1, firstName: 'John', lastName: 'Doe'},
        {id : 2, firstName: 'Ishaan', lastName: 'Guha'},
        {id : 3, firstName: 'John', lastName: 'Doe'},
    ];
    res.json(customers);
});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));