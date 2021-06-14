import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationMenu from "./components/NavigationMenu/NavigationMenu.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    < >
      <Router>
      <Switch>
        <Route exact path="/">
        <NavigationMenu/>
       
        </Route>
        <Route  path="/home">
        <NavigationMenu/>
        <Home/>

        
        </Route>
        <Route  path="/shop">
        <NavigationMenu/>
        
        </Route>
        <Route  path="/periodTracker">
        <NavigationMenu/>
        
        </Route>
        <Route  path="/blog">
        <NavigationMenu/>
        
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
