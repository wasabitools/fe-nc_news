import "./Articles.css";
import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../utils/api";


class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { topic } = this.props;
     const filteredArticles = this.state.articles.filter(
      article => {if (!topic){
        return this.state.articles
      } else return article.topic === topic}
    );
    return (
      <main>
        <h2>{topic ? `Articles on ${topic}` : "All articles"}</h2>
       {filteredArticles.map(article =>{
          return (
            <div className="articlesList" key={article.article_id}>
              <Link id='articleLink'to={`/articles/${article.article_id}`}>
                <h3 key={article.article_id}>{article.title}</h3>
                <p>{article.votes} votes </p>
                <p>nc/{article.author}</p>
                <p>{Date(article.created_at).toString().slice(0, 24)}</p>
              </Link>
            </div>
          ) 
        })}
      </main>
    );
  }
  componentDidMount() {
    if (this.props.topic){
    this.fetchArticles(this.props.topic);}
    else this.fetchArticles()
  }
  componentDidUpdate(prevProps, prevState) {
    const newTopic = this.props.topic !== prevProps.topic
    if (newTopic) this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({articles});
    });
  };
}

export default Articles;
