import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App Page</h1>
      
      <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
