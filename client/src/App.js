import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Landing } from "./components/layout";
import "./App.css";

const App = () => (
  <Router>
    <>
      <Navbar />
      <Route exact path="/" component={Landing} />
    </>
  </Router>
);

export default App;
