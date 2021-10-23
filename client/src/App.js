import './App.css';
import Customers from './components/customers/customers'
import Home from './components/customers/Home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
    
          <Home/>
        
        <Customers />
      </header>
    </div>
  );
}

export default App;
