import React from "react";
import {Link} from '@reach/router'
import './Error.css'

const Error = (props) => {
  return (
    <div className='error'>
      <p>Ooops!</p>
      {props.location.state.message && props.location.state && (
        props.location.state.message
      )}
      <Link to='/'>
      <button id='error'>Go back</button>
      </Link>
    </div>
  );
};

export default Error;
