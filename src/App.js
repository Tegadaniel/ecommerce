import './App.css';
import Body from './components/body/Body';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/">
        <Body/>
        </Route>
        <Route  path = "/cart">
        <Cart/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
