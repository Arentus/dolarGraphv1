import React from "react";
import "./App.scss";
import "./assets/scss/Basic.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Layout>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>robwert1997@gmail.com</h2>;
}
export default App;
