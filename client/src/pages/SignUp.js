import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "materialize-css";
import axios from "axios";

import { signUp } from "../redux/action-creator/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authentication);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleComfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // const handleSignUpClick = () => {
  //   axios({
  //     method: "post",
  //     url: "/signUp",
  //     data: { name: "", password: "", email: "" },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      Alert.toast({
        html: "Password do not match",
        classes: "#c62828 red darken-3",
      });
    } else {
      if (error) {
        // Alert.toast({
        //   html: error,
        //   classes: "#c62828 red darken-3",
        // });
        return;
      } else {
        dispatch(signUp({ name, email, password }, history));
      }
    }
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>CAMAP</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleComfirmPasswordChange}
        />
        {error !== null ? <div className="error">{error}</div> : null}
        <button
          className="btn waves-effect waves-light #42a5f5 blue lighten-1"
          onClick={handleSignUpClick}
        >
          SignUP
        </button>
        <h5>
          <Link to="/signin">Already have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
