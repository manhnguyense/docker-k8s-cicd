import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/GithubContext";

export default function User() {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
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
