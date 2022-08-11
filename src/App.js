import React, { Fragment } from "react";
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/User";
import UserDetail from "./components/users/UserDetail";
import "./App.css";
import Search from "./components/users/Search";
import About from "./components/about/About";
import Alert from "./components/users/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder"></Navbar>
          <div className="container">
            <Alert></Alert>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Fragment>
                    <Search />
                    <User></User>
                  </Fragment>
                }
              ></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/user/:login" element={<UserDetail />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
