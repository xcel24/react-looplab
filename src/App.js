import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Explore from "./components/Explore";
import Create from "./components/Create";
import Share from "./components/Share";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/share" component={Share} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
