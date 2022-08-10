import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

export default function User({ loading, users }) {
  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

const userStyle = {
  display: "gird",
  girdTemplateColumns: "repeat(4, 1fr)",
  girdGap: "1rem",
};
