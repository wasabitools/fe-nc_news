import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";
import Slogin from "./components/Slogin/Slogin";
import Articles from "./components/Articles/Articles";
import * as api from "./utils/api";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <Menu topics={topics} />
        <Search />
        <Router className="results">
          <Articles path="/" topic={topics} />
        </Router>
        <Slogin />
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics = () => {
    api.getTopics().then(topics => {
      console.log(topics);
      this.setState({ topics });
    });
  };
}

export default App;
