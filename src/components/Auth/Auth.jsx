import React, { useState } from "react";
import AuthForm from "../../styles/AuthForm";

const Auth = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    address: ""
  });
  const [register, setRegister] = useState(false);
  return (
    <div>
      <AuthForm onSubmit={e => console.log("working")}>
        <label>Username:</label>
        <input
          type="text"
          value={state.username}
          onChange={e =>
            setState({ ...state, username: e.currentTarget.value })
          }
        />
        <label>Password:</label>
        <input
          type="password"
          value={state.password}
          onChange={e =>
            setState({ ...state, password: e.currentTarget.value })
          }
        />
        {register ? (
          <>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={state.confirmPassword}
              onChange={e =>
                setState({ ...state, confirmPassword: e.currentTarget.value })
              }
            />
            <label>Address:</label>
            <input
              type="text"
              value={state.address}
              onChange={e =>
                setState({ ...state, address: e.currentTarget.value })
              }
            />
          </>
        ) : null}
        <button type="submit">Login</button>
        {!register ? (
          <>
            <p>
              Don't have an account? Register{" "}
              <a
                href="#"
                onClick={() => {
                  setRegister(true);
                }}
              >
                here
              </a>
            </p>
          </>
        ) : (
          <>
            <p>
              Already have an account? Login{" "}
              <a
                href="#"
                onClick={() => {
                  setRegister(false);
                }}
              >
                here
              </a>
            </p>
          </>
        )}
      </AuthForm>
    </div>
  );
};

export default Auth;
