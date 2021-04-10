import { Login } from "./layout/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./layout/Home";


function App() { 
  return (
    <Router>  
      <Switch>   
        <Route exact path="/" component={Login} />
        <Route exact path="/books" component={Home} />
      </Switch> 
    </Router>
  );
}

export default App;