import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/action-creator/auth";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authentication);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInClick = (event) => {
    event.preventDefault();
    dispatch(signIn({ email, password }, history));
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>CAMAP</h2>
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
        <button
          className="btn waves-effect waves-light #42a5f5 blue lighten-1"
          onClick={handleSignInClick}
        >
          Login
        </button>
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </div>
  );
};

export default SignIn;
