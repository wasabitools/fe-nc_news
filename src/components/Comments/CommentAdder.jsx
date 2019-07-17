import React, { Component } from "react";
import { postComment } from "../../utils/api";
import { navigate } from "@reach/router";
import "./Comments.css";

class CommentAdder extends Component {
  state = {
    comment: {},
    body: "",
    author: "jessjelly"
  };
  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Comment: </label>
        <input
          type="text"
          id="comment"
          value={body}
          onChange={this.handleChange}
          placeholder="Type here..."
        />
        <button id="post" type="submit">
          Post
        </button>
      </form>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body, author } = this.state;
    const { article_id } = this.props;
    postComment(article_id, body, author).then(({ article_id }) => {
      navigate(`/articles/${article_id}`, {
        state: { postSuccessful: true }
      }).catch(err => {
        navigate(`/error`, {
          state: {
            code: err.status,
            message: err.message
          }
        });
      });
    });
  };
}

export default CommentAdder;
