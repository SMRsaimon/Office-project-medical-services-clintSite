import './App.css';
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

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
