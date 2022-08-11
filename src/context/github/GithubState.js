import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_ALERT,
  FETCH_USER,
  SET_LOADING,
} from "../type";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    alert: {},
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Clear user
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  //Get user
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };
  // fetch data
  const fetchData = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
    );
    dispatch({ type: FETCH_USER, payload: res.data });
  };

  const setAlerts = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message: message, type: type } });
  };

  //Setloading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        clearUsers,
        getUser,
        fetchData,
        setAlerts,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
