import React from "react";
import Footer from "./footer/Footer";
import Error from "./error/Error";
import Header from "./header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import HowItWorks from "./how-it-works/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route path="/pricing">
            <Error />
          </Route>
          <Route path="/science">
            <Error />
          </Route>
          <Route path="/faq">
            <Error />
          </Route>
          <Route path="/about-us">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
