import React, { useState } from "react";
import AuthForm from "../../styles/AuthForm";
import Input from "../../styles/Input";
import useForm from "../useForm";

const registerQuery = `
mutation User ($username: String!, $password: String!, $confirmPassword: String!, $email: String!, $address: String!){
  register(username: $username, password: $password, confirmPassword: $confirmPassword, email: $email, address: $address){
    logged
    message
    user {
      id
      username
      address
      verified
    }
  }
}
`;

const loginQuery = `
mutation User ($username: String!, $password: String!){
  login(username: $username, password: $password){
    message
    logged
    user {
      id
      username
      address
      verified
    }
  }
}
`;

const Auth = ({ props: { history, setUser, setLogged } }) => {
  const authenticate = async () => {
    try {
      if (register) {
        const variables = {
          username: values.username,
          password: values.password,
          confirmPassword: values.confirmPassword,
          email: values.eMail,
          address: values.address
        };
        const data = await fetch("http://localhost:9000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query: registerQuery, variables })
        });
        const parsedData = await data.json();
        if (parsedData.data.register.logged) {
          setLogged(true);
          setUser(parsedData.data.register.user);
        } else {
          setMessage(parsedData.data.register.message);
        }
      } else {
        const variables = {
          username: values.username,
          password: values.password
        };
        const data = await fetch("http://localhost:9000/graphql", {
          method: "POST",
          body: JSON.stringify({ query: loginQuery, variables }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const parsedData = await data.json();
        if (parsedData.data.login.logged) {
          setLogged(true);
          setUser(parsedData.data.login.user);
        } else {
          setMessage(parsedData.data.login.message);
        }
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
