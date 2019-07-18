// import React, { Component } from "react";
// // import { fetchArticles } from "../../utils/api";
// import "./Search.css";

// class Search extends Component {
//   state = {
//     search: ""
//   };
//   render() {
//     const { search } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className="search">
//         <input
//           type="text"
//           placeholder="Search here"
//           value={search}
//           onChange={this.handleChange}
//         />
//         <button type="submit">
//           <span className="emoji">🔍</span>
//         </button>
//       </form>
//     );
//   }
//   handleChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { search } = this.state;
//     this.updateSearch({ search });
//   };

//   updateSearch = searchTerm => {
//     this.setState({ search: searchTerm });
//   };
// }

// export default Search;
