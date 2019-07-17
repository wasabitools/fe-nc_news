import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../../utils/api";
import "../Votes/Votes.css";

class Votes extends Component {
  state = {
    voteChange: 0,
    error: null
  };
  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div className="poll">
        <button
          className="voteButton"
          onClick={() => {
            this.vote(1);
          }}
        >
          +
        </button>
        <p id="voteNum">{votes + voteChange}</p>
        <button
          className="voteButton"
          onClick={() => {
            this.vote(-1);
          }}
        >
          -
        </button>
      </div>
    );
  }

  vote = increment => {
    const { id, section } = this.props;
    api.vote(id, increment, section).catch(err => {
      this.setState(state => ({ voteChange: state.voteChange - increment }));
    });
    this.setState(state => ({ voteChange: state.voteChange + increment }));
  };
}
Votes.propTypes = {
  votes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired
};
export default Votes;
