import React, { Component } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

export default class User extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div>
          <Spinner></Spinner>
        </div>
      );
    }
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "gird",
  girdTemplateColumns: "repeat(4, 1fr)",
  girdGap: "1rem",
};
