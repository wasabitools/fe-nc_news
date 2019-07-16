import React from "react";

const Error = () => {
  return (
    <div>
      <p>Oops!</p>
      <p>{this.props.location.state.message}</p>
    </div>
  );
};

export default Error;
