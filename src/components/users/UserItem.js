import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserItem extends Component {
  render() {
    const { avatar_url, login } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark">
            Get More
          </Link>
        </div>
      </div>
    );
  }
}
