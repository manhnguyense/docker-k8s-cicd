import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/User";
import "./App.css";
import axios from "axios";
import Search from "./components/users/Search";
class App extends Component {
  state = {
    users: [],
    loading: false,
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

  render() {
    return (
      <div>
        <Navbar title="Github Finder"></Navbar>
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0}
          />
          <User loading={this.state.loading} users={this.state.users}></User>
        </div>
      </div>
    );
  }
}

export default App;
