import React, { useState } from "react";
import useForm from "../useForm";
import LandingPage from "../../styles/LandingPage";
import Input from "../../styles/Input";
import SubmitButton from '../../styles/SubmitButton'

const Landing = ({props: {setAddress, history}}) => {

  const searchAddress = async () => {
    setAddress(values.address);
    history.push("/home");
  };

  const { values, handleChange, handleSubmit } = useForm(searchAddress);

  return (
    <LandingPage>
      <div>
        <h1>MyGovernment</h1>
        <p>Enter your address below to see who represents you</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Search</SubmitButton>
        </form>
      </div>
    </LandingPage>
  );
};

export default Landing;
