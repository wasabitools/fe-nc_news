import React from "react";
import { Link } from "@reach/router";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <Link className="link" id="home" to="/">
        Home
      </Link>
      <Link className="link" id="coding" to="/topics/coding">
        Coding
      </Link>
      <Link className="link" id="cooking" to="/topics/cooking">
        Cooking
      </Link>
      <Link className="link" id="football" to="/topics/football">
        Football
      </Link>
    </nav>
  );
};

export default Menu;
