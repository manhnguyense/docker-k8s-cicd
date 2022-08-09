import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetail(props) {
  const { login } = useParams();
  useEffect(() => {
    props.getUser(login);
  }, []);
  const {
    avatar_url,
    url,
    html_url,
    location,
    company,
    name,
    bio,
    twitter_username,
    public_repos,
    followers,
    following,
  } = props?.user;
  return (
    <Fragment>
      <ul>
        <li>
          <button>
            <Link to="/">Back </Link>
          </button>
        </li>
      </ul>
      <ul>
        <li>Username: {twitter_username}</li>
        <li>Name: {name}</li>
        <li>
          <img src={avatar_url} alt=""></img>
        </li>
        <li>Git: {url}</li>
        <li>Html: {html_url}</li>
        <li>Location: {location}</li>
        <li>Company: {company}</li>
        <li>Bio: {bio}</li>
        <li>Repos: {public_repos}</li>
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
      </ul>
    </Fragment>
  );
}
