import React, { useState } from "react";
import LoginForm from "../../../styles/LoginForm";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <LoginForm onSubmit={e => console.log("working")}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.currentTarget.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don't have a username? Register <a href="#">here</a>
        </p>
      </LoginForm>
    </div>
  );
};

export default Login;
