import React, { useState } from "react";
import useForm from "../useForm";
import LandingPage from "../../styles/LandingPage";

const Landing = () => {
  const searchAddress = async () => {
    const data = await fetch(
      `/api/v1/representatives?${encodeURI(values.address)}`
    );
  };
  const { values, handleChange, handleSubmit } = useForm(searchAddress);
  return (
    <LandingPage>
      <h1>MyGovernment</h1>
      <form onSubmit={handleSubmit}>
        <input
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
