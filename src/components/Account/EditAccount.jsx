import React, { useState, useEffect } from "react";
import useForm from '../useForm'

const query = `
  query User ($id: String!) {
    user (id: $id) {
      username
      eMail
      address
    }
  }
`;

const EditAccount = ({ user }) => {
  const updateUser = () => {}

  const [edit, setEdit] = useState(false)
  const {values, setValues, handleChange, handleSubmit} = useForm(updateUser)


  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch("http://localhost:9000/graphql", {
        method: "post",
        body: JSON.stringify({ query, variables: { id: user.id } }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const parsedData = await data.json();
      setValues(parsedData.data.user)
    };
    fetchUser();
  });



  return <div>
    <form>
      <label>Username:</label>
      <input disabled={!edit} value={values.username}></input>
      <label>E-Mail:</label>
      <input disabled={!edit} value={values.eMail}></input>
      <label>Address:</label>
      <input disabled={!edit} value={values.address}></input>
      <label>New Password:</label>
      <input disabled={!edit}></input>
      <label>Confirm New Password:</label>
      <input disabled={!edit}></input>
    </form>
    <button onClick={() => setEdit(!edit)}>Edit My Account Info</button>
  </div>;
};

export default EditAccount;
