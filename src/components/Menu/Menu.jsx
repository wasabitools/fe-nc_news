import React from "react";
import { Link } from "@reach/router";
import "./Menu.css";

const Menu = ({ topics }) => {
  return (
    <nav className="menu">
      <Link className="link" id="home" to="/">
        Home
      </Link>
      {topics.map(({ slug }) => (
        <Link className="link" to={`/topics/${slug}`} key={slug}>
          {slug}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
