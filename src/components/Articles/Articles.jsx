import "./Articles.css";
import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../utils/api";

class Articles extends Component {
  state = {
    articles: [],
    userLoggedIn: true,
    sort_by: ("created_at", "votes", "comment_count")
  };
  render() {
    const { topic } = this.props;
    return (
      <main>
        <h2>{topic ? `Articles on ${topic}` : "All articles"}</h2>
        <form className="sort" onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option value="votes">Votes</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment count</option>
          </select>
          <button type="submit">Sort them out</button>
        </form>
        {this.state.articles.map(article => {
          return (
            <div className="articlesList" key={article.article_id}>
              <Link id="articleLink" to={`/articles/${article.article_id}`}>
                <h3 key={article.article_id}>{article.title}</h3>
                <p>nc/{article.author}</p>
                <p>
                  Posted at{" "}
                  {new Date(article.created_at).toString().slice(0, 24)}
                </p>
              </Link>
            </div>
          );
        })}
      </main>
    );
  }

  handleChange = event => {
    this.setState({
      sort_by: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { sort_by } = this.state;
    const { topic, author } = this.props;
    this.fetchArticles({ topic, sort_by, author });
  };

  componentDidMount() {
    const { topic, author } = this.props;
    const { sort_by } = this.state;
    this.fetchArticles({ topic, sort_by, author });
  }
  componentDidUpdate(prevProps, prevState) {
    const newTopic = this.props.topic !== prevProps.topic;
    if (newTopic) this.fetchArticles(this.props);
  }

  fetchArticles = ({ topic, sort_by, author }) => {
    api.getArticles(topic, sort_by, author).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
