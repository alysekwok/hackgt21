// import './App.css';
import Customers from './components/customers/customers'
import Home from './components/customers/Home';
import NavBar from './components/customers/NavBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Order from './components/customers/Order'
import Pantry from './components/customers/Pantry'
import Profile from './components/customers/Profile'
import List from './components/customers/List'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/order' component= {Order} />
        <Route path='/pantry' component= {Pantry} />
        <Route path='/profile' component= {Profile} />
        <Route path='/list' component= {List} />
    </Router>
  );
}

export default App;
