import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/User";
import UserDetail from "./components/users/UserDetail";
import "./App.css";
import axios from "axios";
import Search from "./components/users/Search";
import About from "./components/about/About";
import Alert from "./components/users/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
    );
    if (res) {
      setUsers(res.data);
      setLoading(false);
    }
  };
  const searchUsers = async (text) => {
    if (text.length > 0) {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
      );
      if (res) {
        setUsers(res.data.items);
        setLoading(false);
      }
    }
  };

  const getUser = async (username) => {
    if (username.length > 0) {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
      );

      if (res) {
        setUser(res.data);
        setLoading(false);
      }
    }
  };

  const setAlerts = (message, type) => {
    setAlert({ message, type });
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="Github Finder"></Navbar>
        <div className="container">
          <Alert alert={alert}></Alert>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users != null}
                    setAlert={setAlerts}
                  />
                  <User loading={loading} users={users}></User>
                </Fragment>
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/user/:login"
              element={
                <UserDetail getUser={getUser} user={user} loading={loading} />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
