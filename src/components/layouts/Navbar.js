import { Link } from "react-router-dom";

import React from "react";

export default function Navbar(props) {
  return (
    <div className="navbar bg-primary">
      <h1>{props.title}</h1>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </div>
  );
}
