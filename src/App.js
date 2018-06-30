import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { Photo } from "./Photo";
import { GetReady } from "./GetReady";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/photo" component={Photo} />
        <Route path="/get-ready" component={GetReady} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
