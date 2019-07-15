// const Articles = () => {
//   return (
//     <main className="results">
//       <h2>All Articles</h2>
//       <ul>
//         <li>
//           <Articlescard />
//         </li>
//         <li>
//           <Articlescard />
//         </li>
//         <li>
//           <Articlescard />
//         </li>
//         <li>
//           <Articlescard />
//         </li>
//       </ul>
//     </main>
//   );
// };

// export default Articles;
import "./Articles.css";
import Articlescard from "./Articlescard";
import React, { Component } from "react";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <main>
        {/* <h2>{topics ? `Articles on ${topics}` : "All articles"}</h2> */}
        <ul>
          <Articlescard path="/topics/:topic" />
          <Articlescard path="/topics/:topic" />
          <Articlescard path="/topics/:topic" />
        </ul>
      </main>
    );
  }
}

export default Articles;
