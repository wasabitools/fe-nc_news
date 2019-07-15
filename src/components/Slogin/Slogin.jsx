import React from "react";
import "./Slogin.css";

const Slogin = ({ login }) => {
  return (
    <section className="slogin">
      <button id="login">Login</button>
      <span>/</span>
      <button id="signup">Sign up</button>
    </section>
  );
};

export default Slogin;
