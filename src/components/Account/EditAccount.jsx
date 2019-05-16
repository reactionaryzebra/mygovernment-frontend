import React, { useState, useEffect } from "react";
import useForm from "../useForm";
import * as routes from '../../constants/routes'

const graphqlEndpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT

const userQuery = `
  query User ($id: String!) {
    user (id: $id) {
      username
      eMail
      address
    }
  }
`;

const editMutation = `
  mutation User ($id: String!, $username: String, $eMail: String, $address: String){
    editUser (id: $id, username: $username, eMail: $eMail, address: $address) {
      id
      username
      eMail
      address
      verified
    }
  }
`;

const deleteMutation = `
  mutation User ($id: String!){
    deleteUser (id: $id)
  }
`

const EditAccount = ({props: {user, setUser, history, setLogged}}) => {

  const updateUser = async () => {

    const variables = {
      id: user.id,
      username: values.username,
      eMail: values.eMail,
      address: values.address
    }

    const data = await fetch(graphqlEndpoint, {
      method: "post",
      body: JSON.stringify({
        query: editMutation,
        variables
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const {data: {editUser}} = await data.json()

    setUser(editUser)
    setEdit(false)
  };

  const deleteUser = async () => {

    const variables = {
      id: user.id
    }

    const data = await fetch(graphqlEndpoint, {
      method: "post",
      body: JSON.stringify({
        query: deleteMutation,
        variables
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const {data: {deleteUser}} = await data.json()
    if (deleteUser) {
      setUser({})
      setLogged(false)
      history.push(routes.ROOT)
    }
  }

  const [edit, setEdit] = useState(false);
  const { values, setValues, handleChange, handleSubmit } = useForm(updateUser);

  useEffect(() => {

    const variables = { id: user.id }

    const fetchUser = async () => {
      const data = await fetch(graphqlEndpoint, {
        method: "post",
        body: JSON.stringify({ query: userQuery, variables }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const { data: {user} } = await data.json();

      setValues(user);
    };

    fetchUser();

  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          disabled={!edit}
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <label>E-Mail:</label>
        <input
          type="text"
          name="eMail"
          disabled={!edit}
          value={values.eMail}
          onChange={handleChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          disabled={!edit}
          value={values.address}
          onChange={handleChange}
        />
        <button type="submit">
          Submit Changes
        </button>
      </form>
      <button onClick={() => setEdit(!edit)}>Edit My Account Info</button>
      <button onClick={() => deleteUser(user.id)}>Delete My Account</button>
    </div>
  );
};

export default EditAccount;
