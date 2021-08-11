import "./App.css";
import Contacts from "./components/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Router>
          <Switch>
            <Route path="/" exact component={Contacts} />
            <Route path="/edit/:id"  component={Edit} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
