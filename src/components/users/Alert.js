import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

export default function Alert() {
  const githubContext = useContext(GithubContext);
  const { type, message } = githubContext.alert;
  return <div className={`alert alert-${type}`}>{message}</div>;
}
