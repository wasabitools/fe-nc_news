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
    const { body } = this.state;
    const { article_id, user } = this.props;
    postComment(article_id, body, user).then(({ article_id }) => {
      navigate(`/articles/${article_id}/comments`, {
        state: { postSuccessful: true }
      }).catch(err => {
        navigate(`/error`, {
          state: {
            code: err.status,
            message: err.msg
          }
        });
      });
    });
  };
}

export default CommentAdder;
