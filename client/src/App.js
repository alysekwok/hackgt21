// import './App.css';
import React, { Component } from "react";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import Customers from './components/customers/customers'
import Home from './components/customers/Home';
import NavBar from './components/customers/NavBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Order from './components/customers/Order'
import Pantry from './components/customers/Pantry'
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store ={store}>
    <Router>
      <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path="/login" Component= {Login} />
        <Route path='/order' component= {Order} />
        <Route path='/pantry' component= {Pantry} />
        <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
    </Router>
    </Provider>
  );
}

export default App;
