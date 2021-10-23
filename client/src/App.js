import './App.css';
import Customers from './components/customers/customers'
import Home from './components/customers/Home'
import NavBar from './components/customers/NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        
      </Switch>

    </Router>
  );
}

export default App;
