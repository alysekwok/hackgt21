import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/api/kitchen')
            .then(res => res.json())
            .then(customers => this.setState({customers}, () => console.log('Customers ffetched ...', customers)));
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer =>
                        <li key = {customer.id}>{ customer.firstName }</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Customers;