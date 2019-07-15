import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <input
          type="text"
          placeholder="Search here"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type="submit">
          <span className="emoji">🔍</span>
        </button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); //doesnt refresh
    this.props.updateSearch(this.state.search); //passes the searched topic to the updated state
  };
}

export default Search;
