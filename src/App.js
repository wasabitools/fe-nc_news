import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";
import Slogin from "./components/Slogin/Slogin";
import Articles from "./components/Articles/Articles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Search />
        <Router className="results">
          <Articles path="/" />
        </Router>
        <Slogin />
        <Footer />
      </div>
    );
  }
}

export default App;
