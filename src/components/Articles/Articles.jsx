import React from "react";
import "./Articles.css";
import Articlescard from "./Articlescard";

const Articles = () => {
  return (
    <main className="results">
      <h2>All Articles</h2>
      <ul>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
        <li>
          <Articlescard />
        </li>
      </ul>
    </main>
  );
};

export default Articles;
