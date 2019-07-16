import React, { Component } from "react";
import { getComments } from "../../utils/api";

class CommentPage extends Component {
  state = {
    comment: {}
  };
  render() {
    const {
      comment: { body }
    } = this.state;
    console.log(this.props.location.state);

    return (
      <div>
        ({this.props.location.state.postSuccessful && <p>Comment posted!</p>})
        <p>{body}</p>
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    const { comment } = this.state;
    getComments(article_id).then(() => {
      this.setState({ comment });
    });
  }
}

export default CommentPage;
