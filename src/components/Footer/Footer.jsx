import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h5>
        <a
          href="https://northcoders.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Northcoders{" "}
        </a>
        2019©
      </h5>
      <h6>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/natasafragkou/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natasa Fragkou
        </a>
      </h6>
    </footer>
  );
};

export default Footer;
