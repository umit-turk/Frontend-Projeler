import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Latest from "./components/Latest/Latest";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
          <Route path="/latest">
            <Navbar />
            <Latest />
          </Route>
          <Route>
            <Navbar />
            <Contact path="/contact" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
