import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form onSubmit={e => console.log("working")}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.currentTarget.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
