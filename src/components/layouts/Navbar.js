import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  static defaultProps = {
    title: "Test",
  };

  render() {
    return (
      <div className="navbar bg-primary">
        <h1>{this.props.title}</h1>
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
}
