app.get('/api/kitchen', (req, res) => {
    const customers = [
        {id : 1, firstName: 'John', lastName: 'Doe'},
        {id : 2, firstName: 'Ishaan', lastName: 'Guha'},
        {id : 3, firstName: 'John', lastName: 'Doe'},
    ];
    res.json(customers);
});