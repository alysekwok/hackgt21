import './App.css';
import Customers from './components/customers/customers'
import Home from './components/customers/Home';
import NavBar from './components/customers/NavBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path="/login" Component= {Login} />

    </Router>
  );
}

export default App;
