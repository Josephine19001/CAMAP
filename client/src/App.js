import React from "react";

import "./App.css";
import NavBar from "./component/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create-post">
        <CreatePost />
      </Route>
    </Router>
  );
}

export default App;
