import React, { useState } from "react";
import AuthForm from "../../styles/AuthForm";
import Input from "../../styles/Input";
import useForm from "../useForm";

const Auth = () => {
  const authenticate = async () => {
    try {
      if (register) {
        const data = await fetch("/api/v1/auth/register", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const parsedData = await data.json();
        parsedData.logged ? console.log("in") : setMessage(parsedData.message);
      } else {
        const data = await fetch("/api/v1/auth/login", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const parsedData = await data.json();
        parsedData.logged ? console.log("in") : setMessage(parsedData.message);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const { handleChange, handleSubmit, values } = useForm(authenticate);
  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div>
      <AuthForm onSubmit={handleSubmit}>
        <label>Username:</label>
        <Input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {register ? (
          <>
            <label>Confirm Password:</label>
            <Input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <label>E-Mail:</label>
            <Input
              type="email"
              name="eMail"
              value={values.eMail}
              onChange={handleChange}
            />
            <label>Address:</label>
            <Input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
          </>
        ) : null}
        <h5>{message}</h5>
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

export default Auth;
