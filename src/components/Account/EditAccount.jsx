import React, { useState, useEffect } from "react";
import useForm from "../useForm";

const getUser = `
  query User ($id: String!) {
    user (id: $id) {
      username
      eMail
      address
    }
  }
`;

const editUser = `
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

const EditAccount = ({ user, setUser }) => {
  const updateUser = async () => {
    const data = await fetch("http://localhost:9000/graphql", {
      method: "post",
      body: JSON.stringify({
        query: editUser,
        variables: {
          id: user.id,
          username: values.username,
          eMail: values.eMail,
          address: values.address
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parsedData = await data.json()
    setUser(parsedData.data.editUser)
    setEdit(false)
  };

  const [edit, setEdit] = useState(false);
  const { values, setValues, handleChange, handleSubmit } = useForm(updateUser);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch("http://localhost:9000/graphql", {
        method: "post",
        body: JSON.stringify({ query: getUser, variables: { id: user.id } }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const parsedData = await data.json();
      setValues(parsedData.data.user);
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
    </div>
  );
};

export default EditAccount;
