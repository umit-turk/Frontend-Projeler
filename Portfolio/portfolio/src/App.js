import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Latest from "./components/Latest/Latest";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Blog1 from "./components/Blog/Blog1";
import Blog2 from "./components/Blog/Blog2";
import Blog3 from "./components/Blog/Blog3";

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
          <Route path="blog1">
            <Navbar />
            <Blog1 />
          </Route>
          <Route path="blog2">
            <Navbar />
            <Blog2 />
          </Route>
          <Route path="blog3">
            <Navbar />
            <Blog3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
