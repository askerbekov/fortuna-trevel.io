import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contacts} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
