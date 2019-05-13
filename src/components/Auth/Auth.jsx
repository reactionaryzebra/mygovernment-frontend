import React, { useState } from "react";
import AuthForm from "../../styles/AuthForm";

const Auth = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    eMail: "",
    address: ""
  });
  const [register, setRegister] = useState(false);
  return (
    <div>
      <AuthForm onSubmit={e => handleSubmit(state, register, e)}>
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
            <label>E-Mail:</label>
            <input
              type="email"
              value={state.eMail}
              onChange={e =>
                setState({ ...state, eMail: e.currentTarget.value })
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
        <button type="submit">{register ? "Register" : "Login"}</button>
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

const handleSubmit = async (state, register, e) => {
  try {
    e.preventDefault();
    if (register) {
      const data = await fetch("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(data);
      const parsedData = await data.json();
      parsedData.logged ? console.log("in") : console.log(parsedData.message);
    } else {
      const data = await fetch("/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const parsedData = await data.json();
      parsedData.logged ? console.log("in") : console.log(parsedData.message);
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default Auth;
