import React, { useState } from "react";
import useForm from "../useForm";
import LandingPage from "../../styles/LandingPage";
import Input from "../../styles/Input";

const Landing = ({props: {setAddress, history}}) => {
  const searchAddress = async () => {
    setAddress(values.address);
    history.push("/home");
  };
  const { values, handleChange, handleSubmit } = useForm(searchAddress);
  return (
    <LandingPage>
      <h1>MyGovernment</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </LandingPage>
  );
};

export default Landing;
