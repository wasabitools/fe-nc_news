import React, { Component } from "react";
import { deleteComment } from "../../utils/api";
import { navigate } from "@reach/router";

class CommentRemover extends Component {
  state = {
    comment: {},
    body: "",
    author: "jessjelly"
  };
  render() {
    return (
      <button
        id="delete"
        type="submit"
        onClick={this.handleDelete}
        value={this.comment.comment_id}
      >
        Delete
      </button>
    );
  }
  handleDelete = event => {
    const { body, author } = this.state;
    const { comment_id, article_id } = this.props;
    deleteComment(body, author, comment_id).then(({ article_id }) => {
      (`/articles/${article_id}`,
      {
        state: { deleteSuccessful: true }
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

export default CommentRemover;
