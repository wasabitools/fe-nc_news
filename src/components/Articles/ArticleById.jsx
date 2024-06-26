import React, { Component } from "react";
import * as api from "../../utils/api";
import { Link, navigate } from "@reach/router";
import Votes from "../Votes/Votes";
import "../Votes/Votes.css";
import "../Articles/Articles.css";
import "../Comments/Comments.css";
import { formatDate } from "../../utils/utils";

class ArticleById extends Component {
  state = {
    article: {},
    comments: [],
    loading: true,
    deleteSuccessful: false,
    comment_id: ""
  };
  render() {
    const { article, comments, loading } = this.state;

    if (loading === true) {
      return <div id="loading">Hold on please!</div>;
    }
    return (
      <div className="singleArticle">
        <h2>{article.title}</h2>
        <h4>nc/ {article.author}</h4>
        <p className="singleBody">{article.body}</p>
        <Votes
          className="votesA"
          votes={article.votes}
          id={article.article_id}
          section="articles"
        >
          <h5 className="votes">{article.votes}</h5>
        </Votes>
        <Link to={`/articles/${article.article_id}/newComment`}>
          <div>
            <button id="postCommbutton">Post a comment</button>
          </div>
        </Link>
        <h6>{article.comment_count} Comments</h6>
        <section>
          {comments.map((comment) => {
            return (
              <div className="comments" key={comment.comment_id}>
                <h4 key={comment.comment_id}>
                  <span>Comment by</span> nc/{comment.author}
                </h4>
                <p>{comment.body}</p>
                <Votes
                  className="votesC"
                  votes={comment.votes}
                  id={comment.comment_id}
                  section="comments"
                >
                  <h5>{comment.votes} Votes</h5>
                </Votes>
                {this.props.user === comment.author ? (
                  <button
                    id={comment.comment_id}
                    onClick={() => {
                      this.handleDelete(comment.comment_id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
                <h6>Posted at {formatDate(comment.created_at)}</h6>
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
    api
      .getArticleById(article_id)
      .then((article) => {
        this.setState({ article, loading: false });
      })
      .catch((err) => {
        navigate("/error", {
          replace: true,
          state: {
            code: err.code,
            message: err.message
          }
        });
      });
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then((comments) => {
        this.setState({ comments });
      })
      .catch((err) => {
        navigate("/error", {
          replace: true,
          state: {
            code: err.code,
            message: err.message
          }
        });
      });
  };

  handleDelete = (comment_id) => {
    api
      .deleteComment(comment_id)
      .then((comments) => {
        this.setState({
          comments: this.state.comments.filter((comment) => {
            return comment.comment_id !== comment_id;
          })
        });
      })
      .then((article_id) => {
        return this.fetchArticleById(article_id);
      });
  };
}

export default ArticleById;
