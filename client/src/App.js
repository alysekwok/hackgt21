// import './App.css';
import Customers from './components/customers/customers'
import Home from './components/customers/Home';
import NavBar from './components/customers/NavBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/customers/Home'
import Order from './components/customers/Order'
import Pantry from './components/customers/Pantry'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path="/login" Component= {Login} />
        <Route path='/order' component= {Order} />
        <Route path='/pantry' component= {Pantry} />

    </Router>
  );
}

export default App;
