import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationMenu from "./components/NavigationMenu/NavigationMenu.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

import Blog from './components/Blog/Blog';
import PeriodTracker from './components/PeriodTracker/Main/PeriodTracker';

function App() {
  return (
    < >
      <Router>
      <Switch>
        <Route exact path="/">
        <NavigationMenu/>
        <Home/>
       
        </Route>
        <Route  path="/home">
        <NavigationMenu/>
        <Home/>

        
        </Route>
        <Route  path="/shop">
        <NavigationMenu/>
        <Shop/>
        
        </Route>
        <Route  path="/periodTracker">
        <NavigationMenu/>
        <PeriodTracker/>
       
        
        </Route>
        <Route  path="/blog">
        <NavigationMenu/>
        <Blog/>
        
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
