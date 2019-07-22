import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Slogin from "./components/Slogin/Slogin";
import Articles from "./components/Articles/Articles";
import ArticleById from "./components/Articles/ArticleById";
import CommentAdder from "./components/Comments/CommentAdder";
import Error from "./components/Error";
import * as api from "./utils/api";

class App extends Component {
  state = {
    topics: [],
    user: "jessjelly"
  };
  render() {
    const { topics, user } = this.state;
    return (
      <div className="App">
        <Header />
        <Menu topics={topics} />
        <Router className="results">
          <Articles path="/" />
          <Articles path="/topics/:topic/" />
          <ArticleById path="/articles/:article_id" user={user} />
          <CommentAdder path="/articles/:article_id/newComment" user={user} />
          <Error default path="/error" />
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
      this.setState({ topics });
    });
  };
}

export default App;
