import React, { Component, Fragment } from "react";
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/User";
import UserDetail from "./components/users/UserDetail";
import "./App.css";
import axios from "axios";
import Search from "./components/users/Search";
import About from "./components/about/About";
import Alert from "./components/users/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
    );
    if (res) {
      this.setState({ users: res.data, loading: false });
    }
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  searchUsers = async (text) => {
    if (text.length > 0) {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
      );
      if (res) {
        this.setState({ users: res.data.items, loading: false });
      }
    }
  };

  getUser = async (username) => {
    if (username.length > 0) {
      this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SERECT}`
      );

      if (res) {
        this.setState({ user: res.data, loading: false });
      }
    }
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder"></Navbar>
          <div className="container">
            <Alert alert={this.state.alert}></Alert>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0}
                      setAlert={this.setAlert}
                    />
                    <User
                      loading={this.state.loading}
                      users={this.state.users}
                    ></User>
                  </Fragment>
                }
              ></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route
                exact
                path="/user/:login"
                element={
                  <UserDetail
                    getUser={this.getUser}
                    user={this.state.user}
                    loading={this.state.loading}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
