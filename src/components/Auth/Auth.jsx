import React, { useState } from "react";
import AuthForm from "../../styles/AuthForm";
import Input from "../../styles/Input";
import useForm from "../useForm";
import * as routes from '../../constants/routes'
import AuthContainer from '../../styles/AuthContainer'
import SubmitButton from '../../styles/SubmitButton'

const graphqlEndpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT

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

  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");

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

        const data = await fetch(graphqlEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query: registerQuery, variables })
        });

        const {data: {register: parsedData}} = await data.json();

        if (parsedData.logged) {
          setLogged(true);
          setUser(parsedData.user);
          history.push('/home')
        } else {
          setMessage(parsedData.message);
        }

      } else {

        const variables = {
          username: values.username,
          password: values.password
        };

        const data = await fetch(graphqlEndpoint, {
          method: "POST",
          body: JSON.stringify({ query: loginQuery, variables }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        const {data: {login: parsedData}} = await data.json();
        if (parsedData.logged) {
          setLogged(true);
          setUser(parsedData.user);
          history.push(routes.HOME)
        } else {
          setMessage(parsedData.message);
        }
      }

    } catch (err) {
      throw new Error(err);
    }
  };

  const { handleChange, handleSubmit, values } = useForm(authenticate);

  return (
    <AuthContainer>
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
        <SubmitButton type="submit">{register ? "Register" : "Login"}</SubmitButton>
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
    </AuthContainer>
  );
};

export default Auth;
