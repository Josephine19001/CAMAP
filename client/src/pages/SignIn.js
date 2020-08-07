import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>CAMAP</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button class="btn waves-effect waves-light #42a5f5 blue lighten-1">
          Login
        </button>
        <Link to="/signup">Don't have an account?</Link>
      </div>
    </div>
  );
};

export default SignIn;
