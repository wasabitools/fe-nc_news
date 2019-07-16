import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link } from "@reach/router";
import "../Articles/Articles.css";
import "../Comments/Comments.css";

class ArticleById extends Component {
  state = {
    article: {},
    title: "",
    body: "",
    author: "",
    comment_count: "",
    votes: "",
    comments: []
  };
  render() {
    const { article, comments } = this.state;
    return (
      <div className="singleArticle">
        <h2>{article.title}</h2>
        <h4>nc/ {article.author}</h4>
        <p className="singleBody">{article.body}</p>
        <h5 className="votes">{article.votes} Votes</h5>
        <Link to="/articles/:article_id/newComment">
          <button id="postCommbutton">Post a comment</button>
        </Link>
        <h6>{article.comment_count} Comments</h6>
        <section>
          {comments.map(comment => {
            return (
              <div className="comments" key={comment.comment_id}>
                <h4 key={comment.comment_id}>
                  <span>Comment by</span> nc/{comment.author}
                </h4>
                <p>{comment.body}</p>
                <h5>{comment.votes} Votes</h5>
                <h6>
                  Posted at{" "}
                  {Date(comment.created_at)
                    .toString()
                    .slice(0, 24)}
                </h6>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
  componentDidMount = () => {
    const { article } = this.state;
    this.fetchArticleById(article);
    this.fetchComments(article);
  };

  fetchArticleById = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments(article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default ArticleById;
