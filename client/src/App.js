// import './App.css';
import Customers from './components/customers/customers'
import Home from './components/customers/Home'
import NavBar from './components/customers/NavBar'
import Order from './components/customers/Order'
import Pantry from './components/customers/Pantry'
import List from './components/customers/List'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/order' component= {Order} />
        <Route path='/pantry' component= {Pantry} />
        <Route path='/list' component= {List} />
        
      </Switch>

    </Router>
  );
}

export default App;
